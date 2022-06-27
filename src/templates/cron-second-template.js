
export function CronSecondTemplate(self) {
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
                <input type="radio" class="second-range second-cycle second-specific" name="second" value="*" />
                <span>Every Second</span>
            </div>
            <div class="radio-item">
                <input type="radio" class="second-range second-cycle second-specific" name="second" value="-" />
                <span>Range</span>
                From
                <input type="number" class="second-range" name="second-range-min" min="0" max="59" placeholder="0" />
                To
                <input type="number" class="second-range" name="second-range-max" min="0" max="59" placeholder="59" />
            </div>
            <div class="radio-item">
                <input type="radio" class="second-range second-cycle second-specific" name="second" value="/" />
                <span>Cycle</span>
                From
                <input type="number" min="0" class="second-cycle" name="second-cycle-min" max="59" placeholder="0" />
                To
                <input type="number" min="0" class="second-cycle" name="second-cycle-max" max="59" placeholder="59" />
                Interval
                <input type="number" min="0" class="second-cycle" name="second-cycle-interval" max="59" placeholder="1" />
            </div>
            <div class="radio-item">
                <input type="radio" class="second-range second-cycle second-specific" name="second" value="," /> <span>Specific</span>
                <div class="specific-div">
                    <input type="checkbox" class="second-specific" name="second-specific" value="0" class="checkbox"> <span class="checkbox-span">0</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="1" class="checkbox"> <span class="checkbox-span">1</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="2" class="checkbox"> <span class="checkbox-span">2</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="3" class="checkbox"> <span class="checkbox-span">3</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="4" class="checkbox"> <span class="checkbox-span">4</span>
                </div>
                <div class="specific-div">  
                    <input type="checkbox" class="second-specific" name="second-specific" value="5" class="checkbox"> <span class="checkbox-span">5</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="6" class="checkbox"> <span class="checkbox-span">6</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="7" class="checkbox"> <span class="checkbox-span">7</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="8" class="checkbox"> <span class="checkbox-span">8</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="9" class="checkbox"> <span class="checkbox-span">9</span>
                </div>
                <div class="specific-div">
                    <input type="checkbox" class="second-specific" name="second-specific" value="10" class="checkbox"> <span class="checkbox-span">10</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="11" class="checkbox"> <span class="checkbox-span">11</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="12" class="checkbox"> <span class="checkbox-span">12</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="13" class="checkbox"> <span class="checkbox-span">13</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="14" class="checkbox"> <span class="checkbox-span">14</span>
                </div>
                <div class="specific-div">
                    <input type="checkbox" class="second-specific" name="second-specific" value="15" class="checkbox"> <span class="checkbox-span">15</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="16" class="checkbox"> <span class="checkbox-span">16</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="17" class="checkbox"> <span class="checkbox-span">17</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="18" class="checkbox"> <span class="checkbox-span">18</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="19" class="checkbox"> <span class="checkbox-span">19</span>
                </div>
                <div class="specific-div">
                    <input type="checkbox" class="second-specific" name="second-specific" value="20" class="checkbox"> <span class="checkbox-span">20</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="21" class="checkbox"> <span class="checkbox-span">21</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="22" class="checkbox"> <span class="checkbox-span">22</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="23" class="checkbox"> <span class="checkbox-span">23</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="24" class="checkbox"> <span class="checkbox-span">24</span>
                </div>
                <div class="specific-div">
                    <input type="checkbox" class="second-specific" name="second-specific" value="25" class="checkbox"> <span class="checkbox-span">25</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="26" class="checkbox"> <span class="checkbox-span">26</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="27" class="checkbox"> <span class="checkbox-span">27</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="28" class="checkbox"> <span class="checkbox-span">28</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="29" class="checkbox"> <span class="checkbox-span">29</span>
                </div>
                <div class="specific-div">
                    <input type="checkbox" class="second-specific" name="second-specific" value="30" class="checkbox"> <span class="checkbox-span">30</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="31" class="checkbox"> <span class="checkbox-span">31</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="32" class="checkbox"> <span class="checkbox-span">32</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="33" class="checkbox"> <span class="checkbox-span">33</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="34" class="checkbox"> <span class="checkbox-span">34</span>
                </div>
                <div class="specific-div">
                    <input type="checkbox" class="second-specific" name="second-specific" value="35" class="checkbox"> <span class="checkbox-span">35</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="36" class="checkbox"> <span class="checkbox-span">36</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="37" class="checkbox"> <span class="checkbox-span">37</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="38" class="checkbox"> <span class="checkbox-span">38</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="39" class="checkbox"> <span class="checkbox-span">39</span>
                </div>
                <div class="specific-div">
                    <input type="checkbox" class="second-specific" name="second-specific" value="40" class="checkbox"> <span class="checkbox-span">40</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="41" class="checkbox"> <span class="checkbox-span">41</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="42" class="checkbox"> <span class="checkbox-span">42</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="43" class="checkbox"> <span class="checkbox-span">43</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="44" class="checkbox"> <span class="checkbox-span">44</span>
                </div>
                <div class="specific-div">
                    <input type="checkbox" class="second-specific" name="second-specific" value="45" class="checkbox"> <span class="checkbox-span">45</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="46" class="checkbox"> <span class="checkbox-span">46</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="47" class="checkbox"> <span class="checkbox-span">47</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="48" class="checkbox"> <span class="checkbox-span">48</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="49" class="checkbox"> <span class="checkbox-span">49</span>
                </div>
                <div class="specific-div">
                    <input type="checkbox" class="second-specific" name="second-specific" value="50" class="checkbox"> <span class="checkbox-span">50</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="51" class="checkbox"> <span class="checkbox-span">51</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="52" class="checkbox"> <span class="checkbox-span">52</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="53" class="checkbox"> <span class="checkbox-span">53</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="54" class="checkbox"> <span class="checkbox-span">54</span>
                </div>
                <div class="specific-div">
                    <input type="checkbox" class="second-specific" name="second-specific" value="55" class="checkbox"> <span class="checkbox-span">55</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="56" class="checkbox"> <span class="checkbox-span">56</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="57" class="checkbox"> <span class="checkbox-span">57</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="58" class="checkbox"> <span class="checkbox-span">58</span>
                    <input type="checkbox" class="second-specific" name="second-specific" value="59" class="checkbox"> <span class="checkbox-span">59</span>
                </div>
            </div>
        </div>
    `
}