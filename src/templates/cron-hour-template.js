
export function CronHourTemplate(self) {
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
                width: 30px;
                display: inline-block;
            }
        </style>
        <div>
            <div class="radio-item">
                <input type="radio" class="hour-range hour-cycle hour-specific" name="hour" value="*" />
                <span>Every Hour</span>
            </div>
            <div class="radio-item">
                <input type="radio" class="hour-range hour-cycle hour-specific" name="hour" value="-" />
                <span>Range</span>
                From
                <input type="number" class="hour-range" name="hour-range-min" min="0" max="23" placeholder="0" />
                To
                <input type="number" class="hour-range" name="hour-range-max" min="0" max="23" placeholder="23" />
            </div>
            <div class="radio-item">
                <input type="radio" class="hour-range hour-cycle hour-specific" name="hour" value="/" />
                <span>Cycle</span>
                From
                <input type="number" min="0" class="hour-cycle" name="hour-cycle-min" max="23" placeholder="0" />
                To
                <input type="number" min="0" class="hour-cycle" name="hour-cycle-max" max="23" placeholder="23" />
                Interval
                <input type="number" min="0" class="hour-cycle" name="hour-cycle-interval" max="23" placeholder="1" />
            </div>
            <div class="radio-item">
                <input type="radio" class="hour-range hour-cycle hour-specific" name="hour" value="," /> <span>Specific</span>
                <div class="specific-div">
                    <input type="checkbox" class="hour-specific" name="hour-specific" value="0" class="checkbox"> <span class="checkbox-span">0</span>
                    <input type="checkbox" class="hour-specific" name="hour-specific" value="1" class="checkbox"> <span class="checkbox-span">1</span>
                    <input type="checkbox" class="hour-specific" name="hour-specific" value="2" class="checkbox"> <span class="checkbox-span">2</span>
                    <input type="checkbox" class="hour-specific" name="hour-specific" value="3" class="checkbox"> <span class="checkbox-span">3</span>
                    <input type="checkbox" class="hour-specific" name="hour-specific" value="4" class="checkbox"> <span class="checkbox-span">4</span>
                </div>
                <div class="specific-div">
                    <input type="checkbox" class="hour-specific" name="hour-specific" value="5" class="checkbox"> <span class="checkbox-span">5</span>
                    <input type="checkbox" class="hour-specific" name="hour-specific" value="6" class="checkbox"> <span class="checkbox-span">6</span>
                    <input type="checkbox" class="hour-specific" name="hour-specific" value="7" class="checkbox"> <span class="checkbox-span">7</span>
                    <input type="checkbox" class="hour-specific" name="hour-specific" value="8" class="checkbox"> <span class="checkbox-span">8</span>
                    <input type="checkbox" class="hour-specific" name="hour-specific" value="9" class="checkbox"> <span class="checkbox-span">9</span>
                </div>
                <div class="specific-div">
                    <input type="checkbox" class="hour-specific" name="hour-specific" value="10" class="checkbox"> <span class="checkbox-span">10</span>
                    <input type="checkbox" class="hour-specific" name="hour-specific" value="11" class="checkbox"> <span class="checkbox-span">11</span>
                    <input type="checkbox" class="hour-specific" name="hour-specific" value="12" class="checkbox"> <span class="checkbox-span">12</span>
                    <input type="checkbox" class="hour-specific" name="hour-specific" value="13" class="checkbox"> <span class="checkbox-span">13</span>
                    <input type="checkbox" class="hour-specific" name="hour-specific" value="14" class="checkbox"> <span class="checkbox-span">14</span>
                </div>
                <div class="specific-div">
                    <input type="checkbox" class="hour-specific" name="hour-specific" value="15" class="checkbox"> <span class="checkbox-span">15</span>
                    <input type="checkbox" class="hour-specific" name="hour-specific" value="16" class="checkbox"> <span class="checkbox-span">16</span>
                    <input type="checkbox" class="hour-specific" name="hour-specific" value="17" class="checkbox"> <span class="checkbox-span">17</span>
                    <input type="checkbox" class="hour-specific" name="hour-specific" value="18" class="checkbox"> <span class="checkbox-span">18</span>
                    <input type="checkbox" class="hour-specific" name="hour-specific" value="19" class="checkbox"> <span class="checkbox-span">19</span>
                </div>
                <div class="specific-div">
                    <input type="checkbox" class="hour-specific" name="hour-specific" value="20" class="checkbox"> <span class="checkbox-span">20</span>
                    <input type="checkbox" class="hour-specific" name="hour-specific" value="21" class="checkbox"> <span class="checkbox-span">21</span>
                    <input type="checkbox" class="hour-specific" name="hour-specific" value="22" class="checkbox"> <span class="checkbox-span">22</span>
                    <input type="checkbox" class="hour-specific" name="hour-specific" value="23" class="checkbox"> <span class="checkbox-span">23</span>
                </div>
            </div>
        </div>
    `
}