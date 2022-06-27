
export function CronDayTemplate(self) {
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
                <input type="radio"  class="day-range day-cycle day-specific day-not day-workday day-last" name="day" value="?" />
                <span>Not Set(Day Or Week can only choose one)</span>
            </div>
            <div class="radio-item">
                <input type="radio"  class="day-range day-cycle day-specific day-not day-workday day-last" name="day" value="*" />
                <span>Every Day</span>
            </div>
            <div class="radio-item">
                <input type="radio"  class="day-range day-cycle day-specific day-not day-workday day-last" name="day" value="-" />
                <span>Range</span>
                From
                <input type="number" class="day-range" name="day-range-min" min="1" max="31" placeholder="1" />
                To
                <input type="number" class="day-range" name="day-range-max" min="1" max="31" placeholder="31" />
            </div>
            <div class="radio-item">
                <input type="radio"  class="day-range day-cycle day-specific day-not day-workday day-last" name="day" value="/" />
                <span>Cycle</span>
                From
                <input type="number" min="1" class="day-cycle" name="day-cycle-min" max="31" placeholder="1" />
                To
                <input type="number" min="1" class="day-cycle" name="day-cycle-max" max="31" placeholder="31" />
                Interval
                <input type="number" min="1" class="day-cycle" name="day-cycle-interval" max="31" placeholder="1" />
            </div>
            <div class="radio-item">
                <input type="radio"  class="day-range day-cycle day-specific day-not day-workday day-last" name="day" value="W" />
                <span>Workday</span>
                The Month
                <input type="number" min="1" class="day-workday" name="day-workday" max="31" placeholder="1" />
                day, nearest weekday(Monday to Friday)
            </div>
            <div class="radio-item">
                <input type="radio" class="day-range day-cycle day-specific day-not day-workday day-last" name="day" value="L" />
                <span>On the last day of month</span>
            </div>
            <div class="radio-item">
                <input type="radio"  class="day-range day-cycle day-specific day-not day-workday day-last" name="day" value="," /> <span>Specific</span>
                <div class="specific-div">
                    <input type="checkbox" class="day-specific" name="day-specific" value="1" class="checkbox"> <span class="checkbox-span">1</span>
                    <input type="checkbox" class="day-specific" name="day-specific" value="2" class="checkbox"> <span class="checkbox-span">2</span>
                    <input type="checkbox" class="day-specific" name="day-specific" value="3" class="checkbox"> <span class="checkbox-span">3</span>
                    <input type="checkbox" class="day-specific" name="day-specific" value="4" class="checkbox"> <span class="checkbox-span">4</span>
                    <input type="checkbox" class="day-specific" name="day-specific" value="5" class="checkbox"> <span class="checkbox-span">5</span>
                </div>
                <div class="specific-div">
                    <input type="checkbox" class="day-specific" name="day-specific" value="6" class="checkbox"> <span class="checkbox-span">6</span>
                    <input type="checkbox" class="day-specific" name="day-specific" value="7" class="checkbox"> <span class="checkbox-span">7</span>
                    <input type="checkbox" class="day-specific" name="day-specific" value="8" class="checkbox"> <span class="checkbox-span">8</span>
                    <input type="checkbox" class="day-specific" name="day-specific" value="9" class="checkbox"> <span class="checkbox-span">9</span>
                    <input type="checkbox" class="day-specific" name="day-specific" value="10" class="checkbox"> <span class="checkbox-span">10</span>
                </div>
                <div class="specific-div">
                    <input type="checkbox" class="day-specific" name="day-specific" value="11" class="checkbox"> <span class="checkbox-span">11</span>
                    <input type="checkbox" class="day-specific" name="day-specific" value="12" class="checkbox"> <span class="checkbox-span">12</span>
                    <input type="checkbox" class="day-specific" name="day-specific" value="13" class="checkbox"> <span class="checkbox-span">13</span>
                    <input type="checkbox" class="day-specific" name="day-specific" value="14" class="checkbox"> <span class="checkbox-span">14</span>
                    <input type="checkbox" class="day-specific" name="day-specific" value="15" class="checkbox"> <span class="checkbox-span">15</span>
                </div>
                <div class="specific-div">
                    <input type="checkbox" class="day-specific" name="day-specific" value="16" class="checkbox"> <span class="checkbox-span">16</span>
                    <input type="checkbox" class="day-specific" name="day-specific" value="17" class="checkbox"> <span class="checkbox-span">17</span>
                    <input type="checkbox" class="day-specific" name="day-specific" value="18" class="checkbox"> <span class="checkbox-span">18</span>
                    <input type="checkbox" class="day-specific" name="day-specific" value="19" class="checkbox"> <span class="checkbox-span">19</span>
                    <input type="checkbox" class="day-specific" name="day-specific" value="20" class="checkbox"> <span class="checkbox-span">20</span>
                </div>
                <div class="specific-div">
                    <input type="checkbox" class="day-specific" name="day-specific" value="21" class="checkbox"> <span class="checkbox-span">21</span>
                    <input type="checkbox" class="day-specific" name="day-specific" value="22" class="checkbox"> <span class="checkbox-span">22</span>
                    <input type="checkbox" class="day-specific" name="day-specific" value="23" class="checkbox"> <span class="checkbox-span">23</span>
                    <input type="checkbox" class="day-specific" name="day-specific" value="24" class="checkbox"> <span class="checkbox-span">24</span>
                    <input type="checkbox" class="day-specific" name="day-specific" value="25" class="checkbox"> <span class="checkbox-span">25</span>
                </div>
                <div class="specific-div">
                    <input type="checkbox" class="day-specific" name="day-specific" value="26" class="checkbox"> <span class="checkbox-span">26</span>
                    <input type="checkbox" class="day-specific" name="day-specific" value="27" class="checkbox"> <span class="checkbox-span">27</span>
                    <input type="checkbox" class="day-specific" name="day-specific" value="28" class="checkbox"> <span class="checkbox-span">28</span>
                    <input type="checkbox" class="day-specific" name="day-specific" value="29" class="checkbox"> <span class="checkbox-span">29</span>
                    <input type="checkbox" class="day-specific" name="day-specific" value="30" class="checkbox"> <span class="checkbox-span">30</span>
                </div>
                <div class="specific-div">
                    <input type="checkbox" class="day-specific" name="day-specific" value="31" class="checkbox"> <span class="checkbox-span">31</span>
                </div>
            </div>
        </div>
    `
}