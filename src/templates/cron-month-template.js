
export function CronMonthTemplate(self) {
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
                <input type="radio" class="month-range month-cycle month-specific" name="month" value="*" />
                <span>Every Month</span>
            </div>
            <div class="radio-item">
                <input type="radio" class="month-range month-cycle month-specific" name="month" value="-" />
                <span>Range</span>
                From
                <input type="number" class="month-range"  name="month-range-min" min="1" max="12" placeholder="1" />
                To
                <input type="number" class="month-range"  name="month-range-max" min="1" max="12" placeholder="12" />
            </div>
            <div class="radio-item">
                <input type="radio" class="month-range month-cycle month-specific" name="month" value="/" />
                <span>Cycle</span>
                From
                <input type="number" min="1" class="month-cycle" name="month-cycle-min" max="12" placeholder="1" />
                To
                <input type="number" min="1" class="month-cycle" name="month-cycle-max" max="12" placeholder="12" />
                Interval
                <input type="number" min="1" class="month-cycle" name="month-cycle-interval" max="12" placeholder="1" />
            </div>
            <div class="radio-item">
                <input type="radio" class="month-range month-cycle month-specific" name="month" value="," /> <span>Specific</span>
                <div class="specific-div">
                    <input type="checkbox" class="month-specific" name="month-specific" value="1" class="checkbox"> <span class="checkbox-span">January</span>
                    <input type="checkbox" class="month-specific" name="month-specific" value="2" class="checkbox"> <span class="checkbox-span">February</span>
                    <input type="checkbox" class="month-specific" name="month-specific" value="3" class="checkbox"> <span class="checkbox-span">March</span>
                    <input type="checkbox" class="month-specific" name="month-specific" value="4" class="checkbox"> <span class="checkbox-span">April</span>
                </div>
                <div class="specific-div">
                    <input type="checkbox" class="month-specific" name="month-specific" value="5" class="checkbox"> <span class="checkbox-span">May</span>
                    <input type="checkbox" class="month-specific" name="month-specific" value="6" class="checkbox"> <span class="checkbox-span">June</span>
                    <input type="checkbox" class="month-specific" name="month-specific" value="7" class="checkbox"> <span class="checkbox-span">July</span>
                    <input type="checkbox" class="month-specific" name="month-specific" value="8" class="checkbox"> <span class="checkbox-span">August</span>
                </div>
                <div class="specific-div">
                    <input type="checkbox" class="month-specific" name="month-specific" value="9" class="checkbox"> <span class="checkbox-span">September</span>
                    <input type="checkbox" class="month-specific" name="month-specific" value="10" class="checkbox"> <span class="checkbox-span">October</span>
                    <input type="checkbox" class="month-specific" name="month-specific" value="11" class="checkbox"> <span class="checkbox-span">November</span>
                    <input type="checkbox" class="month-specific" name="month-specific" value="12" class="checkbox"> <span class="checkbox-span">December</span>
                </div>
            </div>
        </div>
    `
}