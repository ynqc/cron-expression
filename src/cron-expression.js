import { CronExpresionTemplate } from "./templates/cron-expression-template";
import CronParser from 'cron-parser';
import dateFormat from './format-date';
import cronstrue from 'cronstrue';

class CronExpression extends HTMLElement {
    constructor() {
        super();
        this.scheduler = {
            second: '',
            minute: '',
            hour: '',
            day: '',
            month: '',
            week: '',
            year: ''
        }
        this.year = {
            min: "",
            max: ""
        }
        this.runTimeList = [];
        this._render();
    }

    get value () {
        return this.getAttribute('value');
    }

    set value (value) {
        this.setAttribute('value', value);
    }

    connectedCallback () {
        this.liEls = this.shadowRoot.querySelectorAll("li > a");
        this.liEls.forEach((elem, i) => {
            elem.addEventListener("click", (e) => {
                elem.parentNode.classList.add("active");
                if (elem.parentNode.classList.contains("error")) {
                    elem.parentNode.classList.add("both");
                }
                this.liEls.forEach((el, index) => {
                    if (index !== i) {
                        el.parentNode.classList.remove("active");
                        el.parentNode.classList.remove("both");
                    }
                });
                const elements = this.shadowRoot.querySelectorAll(".tab-pane");
                elements.forEach((elem) => elem.setAttribute("class", 'tab-pane fade'));
                elements[i].setAttribute("class", "tab-pane active");
            })
        });
        this.cronExpresion = this.shadowRoot.querySelector("#cron-expression");
        this.cronResult = this.shadowRoot.querySelector("#cron-results");
        this._eventListen();
        this._initFormatValue();
    }

    _initFormatValue() {
        const arr = this.value.split(" ");
        const second = arr[0] || '';
        this.secondEl.setAttribute("value", second);
        this.rs_secondEl.innerHTML = second;

        const minute = arr[1] || '';
        this.minuteEl.setAttribute("value", minute);
        this.rs_minuteEl.innerHTML = minute;

        const hour = arr[2] || '';
        this.hourEl.setAttribute("value", hour);
        this.rs_hourEl.innerHTML = hour;

        const day = arr[3] || '';
        this.dayEl.setAttribute("value", day);
        this.rs_dayEl.innerHTML = day;

        const month = arr[4] || '';
        this.monthEl.setAttribute("value", month);
        this.rs_monthEl.innerHTML = month;

        const week = arr[5] || '';
        this.weekEl.setAttribute("value", week);
        this.rs_weekEl.innerHTML = week;

        const year = arr[6] || '';
        this.yearEl.setAttribute("value", year);
        this.rs_yearEl.innerHTML = year;
    }

    _eventListen () {
        this.secondEl = this.shadowRoot.querySelector("cron-second");
        this.rs_secondEl = this.shadowRoot.querySelector("#result-second");
        this.secondEl.addEventListener("change", (event) => {
            this.scheduler.second = event.detail.value;
            this.rs_secondEl.innerHTML = event.detail.value;
            this.liEls[0].parentNode.classList.remove("error");
            this.liEls[0].parentNode.classList.remove("both");
            this._formatValue();
        });
        this.secondEl.addEventListener("error", (event) => {
            this.scheduler.second = '';
            this.rs_secondEl.innerHTML = '';
            this.liEls[0].parentNode.classList.add("error");
            if (this.liEls[0].parentNode.classList.contains("active")) {
                this.liEls[0].parentNode.classList.add("both");
            }
        });

        this.minuteEl = this.shadowRoot.querySelector("cron-minute");
        this.rs_minuteEl = this.shadowRoot.querySelector("#result-minute");
        this.minuteEl.addEventListener("change", (event) => {
            this.scheduler.minute = event.detail.value;
            this.rs_minuteEl.innerHTML = event.detail.value;
            this.liEls[1].parentNode.classList.remove("error");
            this.liEls[1].parentNode.classList.remove("both");
            this._formatValue();
        });
        this.minuteEl.addEventListener("error", (event) => {
            this.scheduler.minute = '';
            this.rs_minuteEl.innerHTML = '';
            this.liEls[1].parentNode.classList.add("error");
            if (this.liEls[1].parentNode.classList.contains("active")) {
                this.liEls[1].parentNode.classList.add("both");
            }
        });

        this.hourEl = this.shadowRoot.querySelector("cron-hour");
        this.rs_hourEl = this.shadowRoot.querySelector("#result-hour");
        this.hourEl.addEventListener("change", (event) => {
            this.scheduler.hour = event.detail.value;
            this.rs_hourEl.innerHTML = event.detail.value;
            this.liEls[2].parentNode.classList.remove("error");
            this.liEls[2].parentNode.classList.remove("both");
            this._formatValue();
        });
        this.hourEl.addEventListener("error", (event) => {
            this.scheduler.hour = '';
            this.rs_hourEl.innerHTML = '';
            this.liEls[2].parentNode.classList.add("error");
            if (this.liEls[2].parentNode.classList.contains("active")) {
                this.liEls[2].parentNode.classList.add("both");
            }
        });

        this.dayEl = this.shadowRoot.querySelector("cron-day");
        this.rs_dayEl = this.shadowRoot.querySelector("#result-day");
        this.dayEl.addEventListener("change", (event) => {
            this.scheduler.day = event.detail.value;
            this.rs_dayEl.innerHTML = event.detail.value;
            this.liEls[3].parentNode.classList.remove("error");
            this.liEls[3].parentNode.classList.remove("both");
            this._formatValue();
        });
        this.dayEl.addEventListener("error", (event) => {
            this.scheduler.day = '';
            this.rs_dayEl.innerHTML = '';
            this.liEls[3].parentNode.classList.add("error");
            if (this.liEls[3].parentNode.classList.contains("active")) {
                this.liEls[3].parentNode.classList.add("both");
            }
        });

        this.monthEl = this.shadowRoot.querySelector("cron-month");
        this.rs_monthEl = this.shadowRoot.querySelector("#result-month");
        this.monthEl.addEventListener("change", (event) => {
            this.scheduler.month = event.detail.value;
            this.rs_monthEl.innerHTML = event.detail.value;
            this.liEls[4].parentNode.classList.remove("error");
            this.liEls[4].parentNode.classList.remove("both");
            this._formatValue();
        });
        this.monthEl.addEventListener("error", (event) => {
            this.scheduler.month = '';
            this.rs_monthEl.innerHTML = '';
            this.liEls[4].parentNode.classList.add("error");
            if (this.liEls[4].parentNode.classList.contains("active")) {
                this.liEls[4].parentNode.classList.add("both");
            }
        });

        this.weekEl = this.shadowRoot.querySelector("cron-week");
        this.rs_weekEl = this.shadowRoot.querySelector("#result-week");
        this.weekEl.addEventListener("change", (event) => {
            this.scheduler.week = event.detail.value;
            this.rs_weekEl.innerHTML = event.detail.value;
            this.liEls[5].parentNode.classList.remove("error");
            this.liEls[5].parentNode.classList.remove("both");
            this._formatValue();
        });
        this.weekEl.addEventListener("error", (event) => {
            this.scheduler.week = '';
            this.rs_weekEl.innerHTML = '';
            this.liEls[5].parentNode.classList.add("error");
            if (this.liEls[5].parentNode.classList.contains("active")) {
                this.liEls[5].parentNode.classList.add("both");
            }
        });

        this.yearEl = this.shadowRoot.querySelector("cron-year");
        this.rs_yearEl = this.shadowRoot.querySelector("#result-year");
        this.yearEl.addEventListener("change", (event) => {
            this.scheduler.year = event.detail.value;
            this.year.min = event.detail.min;
            this.year.max = event.detail.max;
            this.rs_yearEl.innerHTML = event.detail.value;
            this.liEls[6].parentNode.classList.remove("error");
            this.liEls[6].parentNode.classList.remove("both");
            this._formatValue();
        });
        this.yearEl.addEventListener("error", (event) => {
            this.scheduler.year = '';
            this.rs_yearEl.innerHTML = '';
            this.liEls[6].parentNode.classList.add("error");
            if (this.liEls[6].parentNode.classList.contains("active")) {
                this.liEls[6].parentNode.classList.add("both");
            }
        });
    }

    _formatValue () {
        const format = 'yyyy-MM-dd hh:mm:ss'
        const options = {
            currentDate: dateFormat(new Date(), format)
        }
        try {
            const cron = Object.values(this.scheduler).join(" ");
            const cronStr = cronstrue.toString(cron);
            this.cronExpresion.innerHTML = cronStr;
            const parser = Object.values(this.scheduler).slice(0, 6).join(" ")
            const iter = CronParser.parseExpression(parser, options)
            const result = []
            for (let i = 0; i < 3; i++) {
                let str = dateFormat(iter.next().toString(), format);
                if (this.year.min  && this.year.max) {
                    const temp = str.slice(0, 4);
                    if (this.year.min <= temp && this.year.max >= temp) {
                        str = str;
                        result.push(str);
                    } else if (this.year.min > temp) {
                        str = this.year.min + str.slice(4);
                        result.push(str);
                    }
                } else {
                    result.push(str);
                }
            }
            if (result.length === 0) {
                result.push("No Run Time")
            }
            this.runTimeList = result;
            this._emitChange();
        } catch (e) {
            const message = 'Please set correct expression';
            this.cronExpresion.innerHTML = message;
        }
        this._renderResultTimeList()
    }

    _emitChange () {
        const str = Object.values(this.scheduler).join(" ").trim();
        this.value = str;
        this.dispatchEvent(
            new CustomEvent('change', {
                detail: {
                    scheduler: this.scheduler,
                    cron: this.cronExpresion.innerHTML,
                    runTimes: this.runTimeList,
                    value: this.value
                },
                bubbles: true
            })
        );
    }

    _renderResultTimeList() {
        this.cronResult.innerHTML = '';
        let str = '';
        if (this.runTimeList.length === 0) {
            str = str + '<span>Please set correct expression</span>'
        } else {
            this.runTimeList.map(item => {
                return str = str + '<li>' + item +'</li>'
            })
        }
        this.cronResult.innerHTML = str;
    }

    _render () {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = CronExpresionTemplate(this);
    }
}

if (!customElements.get("cron-expression")) {
    customElements.define("cron-expression", CronExpression)
}

export default {
    next(cron) {
        const format = 'yyyy-MM-dd hh:mm:ss'
        const options = {
            currentDate: dateFormat(new Date(), format)
        }
        try {
            const iter = CronParser.parseExpression(cron, options)
            let str = dateFormat(iter.next().toString(), format);
            return str;
        } catch (e) {
            const message = 'Please set correct expression';
            return message;
        }
    },
    format(cron) {
        try {
            return cronstrue.toString(cron);
        } catch (e) {
            return 'Please set correct expression';
        }
    }
};