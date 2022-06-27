import { CronMinuteTemplate } from '../templates/cron-minute-template';
import { checkCron } from '../cron-valid';

export default class CronMinute extends HTMLElement {
    constructor() {
        super();
        this._render();
    }

    get value () {
        return this.getAttribute('value') || "";
    }

    set value (value) {
        this.setAttribute('value', value);
    }

    connectedCallback () {
        this.inputEls = this.shadowRoot.querySelectorAll("input");
        this.radioEls = this.shadowRoot.querySelectorAll("input[type='radio']");
        this.minRangeEl = this.shadowRoot.querySelector("input[name='minute-range-min']");
        this.maxRangeEl = this.shadowRoot.querySelector("input[name='minute-range-max']");
        this.minCycleEl = this.shadowRoot.querySelector("input[name='minute-cycle-min']");
        this.maxCycleEl = this.shadowRoot.querySelector("input[name='minute-cycle-max']");
        this.intervalCycleEl = this.shadowRoot.querySelector("input[name='minute-cycle-interval']");
        this.specificInputEls = this.shadowRoot.querySelectorAll("input[name='minute-specific']");

        this.exceptEveryEls = this.shadowRoot.querySelectorAll("input:not([name='minute'])");
        this.everyEls = this.shadowRoot.querySelectorAll("input[name='minute']");

        this.exceptRangeEls = this.shadowRoot.querySelectorAll(":not(.minute-range)");
        this.rangeEls = this.shadowRoot.querySelectorAll(".minute-range");

        this.exceptCycleEls = this.shadowRoot.querySelectorAll(":not(.minute-cycle)")
        this.cycleEls = this.shadowRoot.querySelectorAll(".minute-cycle")

        this.exceptSpecificEls = this.shadowRoot.querySelectorAll(":not(.minute-specific)")
        this.specificEls = this.shadowRoot.querySelectorAll(".minute-specific")
        this._eventListen();
        this._initFormatValue();
    }

    _initFormatValue() {
        if (!this.value.trim()) {
            return;
        }
        const isSpecific = this.value && (this.value.includes(",") || Number(this.value) || this.value === "0");
        this.radioEls.forEach((radio, index) => {
            if (isSpecific && radio.value === ",") {
                radio.checked  = true;
            }  else {
                radio.checked = this.value.includes(radio.value);
            }
        });
        if(this.value.includes("-") && this.value.includes("/")) {
            const str = this.value.split("/");
            const interval = str[1];
            const str_before = str[0].trim().split("-");
            const min = str_before[0];
            const max = str_before[1];
            this.minCycleEl.value = min;
            this.maxCycleEl.value = max;
            this.intervalCycleEl.value = interval;
        } else if (this.value.includes("-")) {
            const str = this.value.trim().split("-");
            const min = str[0];
            const max = str[1];
            this.minRangeEl.value = min;
            this.maxRangeEl.value = max; 
        } else if (isSpecific) {
            const arr = this.value.split(",");
            this.specificEls.forEach(el => {
                if (el.type !== "radio") {
                    el.checked = arr.indexOf(el.value) > -1;
                }
            })
        }
        this._formatValue();
        this._validMinute();
    }

    _eventListen() {
        this.inputEls.forEach(el => {
            el.addEventListener("change", () => {
                this._formatValue();
                this._validMinute();
            })
        }) 
    }

    _formatValue() {
        this.radioEls.forEach((el) => {
            if (el.checked) {
                if (el.value === "*") {
                    this.value = "*";
                    this.exceptEveryEls.forEach(item => {
                        item.setAttribute("disabled", true);
                    });
                    this.everyEls.forEach(item => {
                        item.removeAttribute("disabled");
                    })
                } else if(el.value === "-") {
                    const min = this.minRangeEl.value;
                    const max = this.maxRangeEl.value;
                    this.value = min + "-" + max;
                    this.exceptRangeEls.forEach(item => {
                        item.setAttribute("disabled", true);
                    })
                    this.rangeEls.forEach(item => {
                        item.removeAttribute("disabled");
                    })
                } else if (el.value === "/") {
                    const min = this.minCycleEl.value;
                    const max = this.maxCycleEl.value;
                    const interval = this.intervalCycleEl.value;
                    this.value = min + "-" + max + "/" + interval;
                    this.exceptCycleEls.forEach(item => {
                        item.setAttribute("disabled", true);
                    })
                    this.cycleEls.forEach(item => {
                        item.removeAttribute("disabled");
                    })
                } else {
                    const arr = [];
                    this.specificInputEls.forEach(specific => {
                        if (specific.checked) {
                            arr.push(specific.value)
                        }
                    })
                    this.value = arr.join(",");
                    this.exceptSpecificEls.forEach(item => {
                        item.setAttribute("disabled", true);
                    })
                    this.specificEls.forEach(item => {
                        item.removeAttribute("disabled");
                    })
                }
            }
        })
    }

    _validMinute() {
        const valid = checkCron('minute', this.value);
        if (valid) {
            this.dispatchEvent(
                new CustomEvent('change', {
                    detail: {
                        value: this.value
                    },
                    bubbles: true
                })
            );
        } else {
            this.dispatchEvent(
                new CustomEvent('error', {
                    detail: {
                        value: 'minute'
                    },
                    bubbles: true
                })
            );
        }
    }

    _render () {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = CronMinuteTemplate(this);
    }
}

if (!customElements.get("cron-minute")) {
    customElements.define("cron-minute", CronMinute)
}