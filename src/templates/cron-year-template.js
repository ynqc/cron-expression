
export function CronYearTemplate(self) {
    return `
        <style>
            .radio-item {
                margin-bottom: 12px;
            }
            .specific-div {
                margin-top: 12px;
                margin-left: 20px;
            }
            .checkbox-span {
                width: 100px;
                display: inline-block;
            }
        </style>
        <div>
            <div class="radio-item">
                <input type="radio" class="year-range year-cycle year-specific" name="year" value="?" />
                <span>Not Set</span>
            </div>
            <div class="radio-item">
                <input type="radio" class="year-range year-cycle year-specific" name="year" value="*" />
                <span>Every Year</span>
            </div>
            <div class="radio-item">
                <input type="radio" class="year-range year-cycle year-specific" name="year" value="-" />
                <span>Range</span>
                From
                <input type="number" class="year-range" name="year-range-min" min="1970" max="2099" placeholder="1970" />
                To
                <input type="number" class="year-range" name="year-range-max" min="1970" max="2099" placeholder="2099" />
            </div>
            <div class="radio-item">
                <input type="radio" class="year-range year-cycle year-specific" name="year" value="/" />
                <span>Cycle</span>
                From
                <input type="number" min="1970" class="year-cycle" name="year-cycle-min" max="2099" placeholder="1970" />
                To
                <input type="number" min="1970" class="year-cycle" name="year-cycle-max" max="2099" placeholder="2099" />
                Interval
                <input type="number" min="1" class="year-cycle" name="year-cycle-interval" max="10" placeholder="1" />
            </div>
            <div class="radio-item">
                <input type="radio" class="year-range year-cycle year-specific" name="year" value="," /> <span>Specific</span>
                <input type="test" class="year-specific" name="year-specific" placeholder="1970" class="checkbox"> <span class="checkbox-span">1970-2099</span>
            </div>
        </div>
    `
}