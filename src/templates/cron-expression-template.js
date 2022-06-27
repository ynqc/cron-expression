
export function CronExpresionTemplate(self) {
    return `
        <style>
            .cron-express {
                display: flex;
                box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
                padding: 20px;
                min-width: 900px;
                font-size: 14px;
            }
            .cron-left {
                flex: 1;
            }
            .cron-right {
                width: 30%;
            }
            .cron-middle {
                width: 2px;
                height: inherit;
                background: #EBEEF5;
            }
            :host .nav {
                padding-left: 0 !important;
                margin-bottom: 0 !important;
                list-style: none !important;
                display: block;
                border-bottom: 2px solid #EBEEF5;
                height: 42px;
            }
            
            :host .nav > li {
                position: relative !important;
                display: block !important;
            }
            
            :host .nav > li > a {
                position: relative !important;
                display: block !important;
                padding: 10px 15px !important;
            }
            
            :host .nav > li > a:focus,
            :host .nav > li > a:hover {
                text-decoration: none !important;
                color: #409EFF !important;
                // background-color: #eee !important;
            }
            
            :host .nav-tabs > li {
                float: left !important;
                margin-bottom: -1px !important;
            }
            
            :host .nav-tabs > li > a {
                margin-right: 2px !important;
                line-height: 1.42857143 !important;
            }
            
            :host .nav-tabs > li.active > a,
            :host .nav-tabs > li.active > a:focus,
            :host .nav-tabs > li.active > a:hover {
                color: #409EFF !important;
                cursor: default !important;
                border-bottom: 2px solid #409EFF;
            }

            :host .nav-tabs > li.both > a{
                border-bottom: 2px solid red;
            }

            :host .nav-tabs > li.error > a,
            :host .nav-tabs > li.error > a:focus {
                color: red !important;
                cursor: default !important;
            }

            :host .tab-content {
                margin-top: 20px;
            }
            
            :host .tab-content > .tab-pane {
                display: none !important;
            }
            
            :host .tab-content > .active {
                display: block !important;
            }

            .result-container {
                margin-top: 58px;
            }

            .result-item {
                height: 40px;
                padding: 0px 20px;
                border-top: 2px solid #EBEEF5;
                display: flex;
                align-items: center;
            }

            .item-span {
                flex: 1;
            }

            .item-label {
                flex: 1;
            }
            #cron-expression {
                width: 100%;
                height: 40px;
                padding: 0px 20px;
                border-top: 2px solid #EBEEF5;
                display: flex;
                align-items: center;
            }

            .cron-result-list {
                padding: 20px;
                border-top: 2px solid #EBEEF5;
            }

            .cron-result-list > ul {
                list-style-type: none;
            }
        </style>
        <div class="cron-express">
            <div class="cron-left">
                <ul class="nav nav-tabs">
                    <li class="nav-item active">
                        <a>Seconds</a>
                    </li>
                    <li class="nav-item">
                        <a>Minutes</a>
                    </li>
                    <li class="nav-item">
                        <a>Hours</a>
                    </li>
                    <li class="nav-item">
                        <a>Day Of Month</a>
                    </li>
                    <li class="nav-item">
                        <a>Month</a>
                    </li>
                    <li class="nav-item">
                        <a>Week</a>
                    </li>
                    <li class="nav-item">
                        <a>Year</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active">
                        <cron-second></cron-second>
                    </div>
                    <div class="tab-pane fade">
                        <cron-minute></cron-minute>
                    </div>
                    <div class="tab-pane fade">
                        <cron-hour></cron-hour>
                    </div>
                    <div class="tab-pane fade">
                        <cron-day></cron-day>
                    </div>
                    <div class="tab-pane fade">
                        <cron-month></cron-month>
                    </div>
                    <div class="tab-pane fade">
                        <cron-week></cron-week>
                    </div>
                    <div class="tab-pane fade">
                        <cron-year></cron-year>
                    </div>
                </div>
            </div>
            <div class="cron-middle"></div>
            <div class="cron-right">
                <div class="result-container">
                    <div class="result-item">
                        <span class="item-span">Second</span>
                        <label class="item-label" id="result-second"></label>
                    </div>
                    <div class="result-item">
                        <span class="item-span">Minute</span>
                        <label class="item-label" id="result-minute"></label>
                    </div>
                    <div class="result-item">
                        <span class="item-span">Hour</span>
                        <label class="item-label" id="result-hour"></label>
                    </div>
                    <div class="result-item">
                        <span class="item-span">Day Of Month</span>
                        <label class="item-label" id="result-day"></label>
                    </div>
                    <div class="result-item">
                        <span class="item-span">Month</span>
                        <label class="item-label" id="result-month"></label>
                    </div>
                    <div class="result-item">
                        <span class="item-span">Week</span>
                        <label class="item-label" id="result-week"></label>
                    </div>
                    <div class="result-item">
                        <span class="item-span">Year</span>
                        <label class="item-label" id="result-year"></label>
                    </div>
                    <div class="result-item">
                        <span class="item-span">Cron</span>
                        <label class="item-label" id="cron-expression"></label>
                    </div>
                </div>
                <div class="cron-result-list">
                    <span>Run Time</span>
                    <ul id="cron-results"></ul>
                </div>
            </div>
        </div>
    `
}