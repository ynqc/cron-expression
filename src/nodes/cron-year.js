import { CronYearTemplate } from '../templates/cron-year-template';
import { checkCron } from '../cron-valid';

export default class CronYear extends HTMLElement {
    constructor() {
        super();
        this._render();
        this.min = "";
        this.max = "";
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
        this.minRangeEl = this.shadowRoot.querySelector("input[name='year-range-min']");
        this.maxRangeEl = this.shadowRoot.querySelector("input[name='year-range-max']");
        this.minCycleEl = this.shadowRoot.querySelector("input[name='year-cycle-min']");
        this.maxCycleEl = this.shadowRoot.querySelector("input[name='year-cycle-max']");
        this.intervalCycleEl = this.shadowRoot.querySelector("input[name='year-cycle-interval']");
        this.specificInputEls = this.shadowRoot.querySelector("input[name='year-specific']");

        this.exceptEveryEls = this.shadowRoot.querySelectorAll("input:not([name='year'])");
        this.everyEls = this.shadowRoot.querySelectorAll("input[name='year']");

        this.exceptRangeEls = this.shadowRoot.querySelectorAll(":not(.year-range)");
        this.rangeEls = this.shadowRoot.querySelectorAll(".year-range");

        this.exceptCycleEls = this.shadowRoot.querySelectorAll(":not(.year-cycle)")
        this.cycleEls = this.shadowRoot.querySelectorAll(".year-cycle")

        this.exceptSpecificEls = this.shadowRoot.querySelectorAll(":not(.year-specific)")
        this.specificEls = this.shadowRoot.querySelectorAll(".year-specific")
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
                min = 1970;
                max = 1970;
            } else {
                const str_before = str[0].trim().split("-");
                min = str_before[0];
                max = str_before[1];
            }
            this.min = min;
            this.max = max;
            this.minCycleEl.value = min;
            this.maxCycleEl.value = max;
            this.intervalCycleEl.value = interval;
        } else if (this.value.includes("-")) {
            const str = this.value.trim().split("-");
            const min = str[0];
            const max = str[1];
            this.min = min;
            this.max = max;
            this.minRangeEl.value = min;
            this.maxRangeEl.value = max; 
        } else if (isSpecific) {
            this.specificInputEls.value = this.value;
            const arr = this.value.split(",").sort();
            this.min = arr[0].trim();
            this.max= arr[arr.length -1].trim();
        }
        this._formatValue();
        this._validYear();
    }

    _eventListen() {
        this.inputEls.forEach(el => {
            el.addEventListener("change", () => {
                this._formatValue();
                this._validYear();
            })
        }) 
    }

    _formatValue() {
        this.radioEls.forEach((el) => {
            if (el.checked) {
                if (el.value === "?") {
                    this.value = "";
                    this.exceptEveryEls.forEach(item => {
                        item.setAttribute("disabled", true);
                    });
                    this.everyEls.forEach(item => {
                        item.removeAttribute("disabled");
                    });
                } else if (el.value === "*") {
                    this.value = "*";
                    this.exceptEveryEls.forEach(item => {
                        item.setAttribute("disabled", true);
                    });
                    this.everyEls.forEach(item => {
                        item.removeAttribute("disabled");
                    });
                } else if(el.value === "-") {
                    this.min = this.minRangeEl.value;
                    this.max = this.maxRangeEl.value;
                    this.value = this.min + "-" + this.max;
                    this.exceptRangeEls.forEach(item => {
                        item.setAttribute("disabled", true);
                    })
                    this.rangeEls.forEach(item => {
                        item.removeAttribute("disabled");
                    })
                } else if (el.value === "/") {
                    this.min = this.minCycleEl.value;
                    this.max = this.maxCycleEl.value;
                    const interval = this.intervalCycleEl.value;
                    if (this.min === "1970" && this.max === "1970") {
                        this.value = "*/" + interval;
                    } else {
                        this.value = this.min + "-" + this.max + "/" + interval;
                    }
                    this.exceptCycleEls.forEach(item => {
                        item.setAttribute("disabled", true);
                    })
                    this.cycleEls.forEach(item => {
                        item.removeAttribute("disabled");
                    })
                } else {
                    this.value = this.specificInputEls.value;
                    const arr = this.value.split(",").sort();
                    this.min = arr[0].trim();
                    this.max= arr[arr.length -1].trim();
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

    _validYear() {
        let valid = false;
        if (this.value === "?") {
            valid = true;
        } else if (this.value) {
            valid = checkCron('year', this.value);
        } else {
            valid = true;
        }
        if (valid) {
            this.dispatchEvent(
                new CustomEvent('change', {
                    detail: {
                        value: this.value,
                        min: this.min,
                        max : this.max
                    },
                    bubbles: true
                })
            );
        } else {
            this.dispatchEvent(
                new CustomEvent('error', {
                    detail: {
                        value: 'year'
                    },
                    bubbles: true
                })
            );
        }
    }

    _render () {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = CronYearTemplate(this);
    }
}

if (!customElements.get("cron-year")) {
    customElements.define("cron-year", CronYear)
}