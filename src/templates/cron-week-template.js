
export function CronWeekTemplate(self) {
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
                width: 80px;
                display: inline-block;
            }
        </style>
        <div>
            <div class="radio-item">
                <input type="radio" class="week-range week-cycle week-specific week-not week-workweek week-last week-number" name="week" value="?" />
                <span>Not Set(week or Week can only choose one)</span>
            </div>
            <div class="radio-item">
                <input type="radio" class="week-range week-cycle week-specific week-not week-workweek week-last week-number" name="week" value="*" />
                <span>Every Week</span>
            </div>
            <div class="radio-item">
                <input type="radio" class="week-range week-cycle week-specific week-not week-workweek week-last week-number" name="week" value="-" />
                <span>Range</span>
                From
                <input type="number" class="week-range" name="week-range-min" min="0" max="6" placeholder="0" />
                To
                <input type="number" class="week-range" name="week-range-max" min="0" max="6" placeholder="6" />
            </div>
            <div class="radio-item">
                <input type="radio" class="week-range week-cycle week-specific week-not week-workweek week-last week-number" name="week" value="/" />
                <span>Cycle</span>
                From
                <input type="number" min="0" class="week-cycle" name="week-cycle-min" max="6" placeholder="0" />
                To
                <input type="number" min="0" class="week-cycle" name="week-cycle-max" max="6" placeholder="6" />
                Interval
                <input type="number" min="0" class="week-cycle" name="week-cycle-interval" max="6" placeholder="0" />
            </div>
            <div class="radio-item">
                <input type="radio" class="week-range week-cycle week-specific week-not week-workweek week-last week-number" name="week" value="L" />
                <span>On the last</span>
                <input type="number" min="0" class="week-last" name="week-last" max="6" placeholder="0" />
                <span>day of week</span>
            </div>
            <div class="radio-item">
                <input type="radio" class="week-range week-cycle week-specific week-not week-workweek week-last week-number" name="week" value="#" />
                <span>Specific</span>
                week day
                <input type="number" class="week-number" name="week-number-min" min="0" max="6" placeholder="0" />
                week number
                <input type="number" class="week-number" name="week-number-max" min="0" max="5" placeholder="0" />
            </div>
            <div class="radio-item">
                <input type="radio" class="week-range week-cycle week-specific week-not week-workweek week-last week-number" name="week" value="," /> <span>Specific</span>
                <div class="specific-div">
                    <input type="checkbox" class="week-specific" name="week-specific" value="0" class="checkbox"> <span class="checkbox-span">Sunweek</span>
                    <input type="checkbox" class="week-specific" name="week-specific" value="1" class="checkbox"> <span class="checkbox-span">Monweek</span>
                    <input type="checkbox" class="week-specific" name="week-specific" value="2" class="checkbox"> <span class="checkbox-span">Tuesweek</span>
                    <input type="checkbox" class="week-specific" name="week-specific" value="3" class="checkbox"> <span class="checkbox-span">Wednesweek</span>
                </div>
                <div class="specific-div">
                    <input type="checkbox" class="week-specific" name="week-specific" value="4" class="checkbox"> <span class="checkbox-span">Thursweek</span>
                    <input type="checkbox" class="week-specific" name="week-specific" value="5" class="checkbox"> <span class="checkbox-span">Friweek</span>
                    <input type="checkbox" class="week-specific" name="week-specific" value="6" class="checkbox"> <span class="checkbox-span">Saturweek</span>
                </div>
            </div>
        </div>
    `
}