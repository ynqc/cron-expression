import { CronSecondTemplate } from '../templates/cron-second-template';
import { checkCron } from '../cron-valid';

export default class CronSecond extends HTMLElement {
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
        this.radioEls = this.shadowRoot.querySelectorAll("input[name='second']");
        this.minRangeEl = this.shadowRoot.querySelector("input[name='second-range-min']");
        this.maxRangeEl = this.shadowRoot.querySelector("input[name='second-range-max']");
        this.minCycleEl = this.shadowRoot.querySelector("input[name='second-cycle-min']");
        this.maxCycleEl = this.shadowRoot.querySelector("input[name='second-cycle-max']");
        this.intervalCycleEl = this.shadowRoot.querySelector("input[name='second-cycle-interval']");
        this.specificInputEls = this.shadowRoot.querySelectorAll("input[name='second-specific']");

        this.exceptEveryEls = this.shadowRoot.querySelectorAll("input:not([name='second'])");
        this.everyEls = this.shadowRoot.querySelectorAll("input[name='second']");

        this.exceptRangeEls = this.shadowRoot.querySelectorAll(":not(.second-range)");
        this.rangeEls = this.shadowRoot.querySelectorAll(".second-range");

        this.exceptCycleEls = this.shadowRoot.querySelectorAll(":not(.second-cycle)")
        this.cycleEls = this.shadowRoot.querySelectorAll(".second-cycle")

        this.exceptSpecificEls = this.shadowRoot.querySelectorAll(":not(.second-specific)")
        this.specificEls = this.shadowRoot.querySelectorAll(".second-specific")
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
        if(this.value.includes("/")) {
            const str = this.value.split("/");
            const interval = str[1];
            let min, max;
            if (str[0] === "*") {
                min = 0;
                max = 0;
            } else {
                const str_before = str[0].trim().split("-");
                min = str_before[0];
                max = str_before[1];
            }
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
        this._validSecond();
    }

    _eventListen() {
        this.inputEls.forEach(el => {
            el.addEventListener("change", () => {
                this._formatValue();
                this._validSecond();
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
                    });
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
                    if (min === "0" && max === "0") {
                        this.value = "*/" + interval;
                    } else {
                        this.value = min + "-" + max + "/" + interval;
                    }
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

    _validSecond() {
        const valid = checkCron('second', this.value);
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
                        value: 'second'
                    },
                    bubbles: true
                })
            );
        }
    }

    _render () {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = CronSecondTemplate(this);
    }
}

if (!customElements.get("cron-second")) {
    customElements.define("cron-second", CronSecond)
}