export function checkCron(type, value) {
    if (type === 'second') {
        return checkSeconds(value);
    } else if  (type === "minute") {
        return checkMinutes(value);
    } else if (type === "hour") {
        return checkHours(value);
    } else if (type === "day") {
        return checkDayOfMonth(value);
    } else if (type === "month") {
        return checkMonths(value);
    } else if (type === "week") {
        return checkDayOfWeek(value)
    } else if (type === "year") {
        return checkYear(value)
    }
}


function checkSeconds (value) {
    return checkField(value, 0, 59);
}

function checkField (value, minimal, maximal) {
    if (value.indexOf("-") > -1 && value.indexOf("/") === -1) {
        const startValue = value.substring(0, value.indexOf("-"));
        const endValue = value.substring(value.indexOf("-") + 1);

        if (!(checkIntValue(startValue, minimal, maximal, true) && checkIntValue(endValue, minimal, maximal, true))) {
            return false;
        }
        try {
            const startVal = parseInt(startValue, 10);
            const endVal = parseInt(endValue, 10);
            return endVal > startVal;
        } catch (e) {
            return false;
        }
    } else if (value.indexOf(",") > -1) {
        return checkListField(value, minimal, maximal);
    } else if (value.indexOf("/") > -1) {
        return checkIncrementField(value, minimal, maximal);
    } else if (value.indexOf("*") != -1) {
        return true;
    } else {
        return checkIntValue(value, minimal, maximal, true);
    }
}

function checkIntValue (value, minimal, maximal, checkExtremity) {
    try {
        const val = parseInt(value, 10);
        if (value == val) {
            if (checkExtremity) {
                if (val < minimal || val > maximal) {
                    return false;
                }
            }
            return true;
        }
        return false;
    } catch (e) {
        return false;
    }
}

function checkMinutes (minutesField) {
    return checkField(minutesField, 0, 59);
}

function checkHours (hoursField) {
    return checkField(hoursField, 0, 23);
}

function checkDayOfMonth (value) {
    if (value == "?") {
        return true;
    }

    if (value.indexOf("L") >= 0) {
        return checkFieldWithLetter(value, "L", 0, 6, -1, -1);
    } else if (value.indexOf("W") >= 0) {
        return checkFieldWithLetter(value, "W", 1, 31, -1, -1);
    } else {
        return checkField(value, 1, 31);
    }    
}


function checkMonths (value) {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    months.forEach((month, i) => {
        value = value.replace(month, i + 1);
    });
    // if (!Number(value)) {
    //     if (months.indexOf(value) === -1) {
    //         return false;
    //     } else {
    //         months.forEach((month, i) => {
    //             value = value.replace(month, i + 1);
    //         })
    //     }
    // }
    return checkField(value, 1, 31);
}

function checkDayOfWeek (value) {
    const weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    weeks.forEach((week, i) => {
        value = value.replace(week, i);
    });
    // if (!Number(value)) {
    //     if (weeks.indexOf(value) === -1) {
    //         return false;
    //     } else {
    //         weeks.forEach((week, i) => {
    //             value = value.replace(week, i + 1);
    //         })
    //     }
    // }

    if (value == "?") {
        return true;
    }

    if (value.indexOf("L") >= 0) {
        return checkFieldWithLetter(value, "L", 0, 6, -1, -1);
    } else if (value.indexOf("#") >= 0) {
        return checkFieldWithLetter(value, "#", 0, 6, 1, 5);
    } else {
        return checkField(value, 0, 6);
    }
}

function checkYear (value) {
    return checkField(value, 1970, 2099);
}


function checkFieldWithLetter (value, letter, minimalBefore, maximalBefore,
    minimalAfter, maximalAfter) {
    let canBeAlone = false;
    let canHaveIntBefore = false;
    let canHaveIntAfter = false;
    let mustHaveIntBefore = false;
    let mustHaveIntAfter = false;

    if (letter == "L") {
        canBeAlone = true;
        canHaveIntBefore = true;
        canHaveIntAfter = false;
        mustHaveIntBefore = false;
        mustHaveIntAfter = false;
    }
    if (letter == "W") {
        canBeAlone = false;
        canHaveIntBefore = true;
        canHaveIntAfter = false;
        mustHaveIntBefore = true;
        mustHaveIntAfter = false;
    }
    if (letter == "#") {
        canBeAlone = false;
        canHaveIntBefore = true;
        canHaveIntAfter = true;
        mustHaveIntBefore = true;
        mustHaveIntAfter = true;
    }

    let beforeLetter = "";
    let afterLetter = "";

    if (value.indexOf(letter) >= 0) {
        beforeLetter = value.substring(0, value.indexOf(letter));
    }

    if (!value.endsWith(letter)) {
        afterLetter = value.substring(value.indexOf(letter) + 1);
    }

    if (value.indexOf(letter) >= 0) {
        if (letter == value) {
            return canBeAlone;
        }

        if (canHaveIntBefore) {
            if (mustHaveIntBefore && beforeLetter.length == 0) {
                return false;
            }

            if (!checkIntValue(beforeLetter, minimalBefore, maximalBefore, true)) {
                return false;
            }
        } else {
            if (beforeLetter.length > 0) {
                return false;
            }
        }

        if (canHaveIntAfter) {
            if (mustHaveIntAfter && afterLetter.length == 0) {
                return false;
            }

            if (!checkIntValue(afterLetter, minimalAfter, maximalAfter, true)) {
                return false;
            }
        } else {
            if (afterLetter.length > 0) {
                return false;
            }
        }
    }

    return true;
}


function checkIncrementField (value, minimal, maximal) {
    const start = value.substring(0, value.indexOf("/"));
    let min = minimal;
    let max = maximal;
    if (start.indexOf("-") > -1) {
        min = minimal;
        max = start.split("-")[1] - start.split("-")[0];
    }

    const increment = value.substring(value.indexOf("/") + 1);

    if (start != "*" && start.indexOf("-") === -1) {
        return checkIntValue(start, 1, max, true) && checkIntValue(increment, 1, max, false);
    } else {
        return checkIntValue(increment, 1, max, true);
    }
}



function checkListField (value, minimal, maximal) {
    const st = value.split(",");

    const values = new Array(st.length);

    for (let j = 0; j < st.length; j++) {
        values[j] = st[j];
    }

    let previousValue = -1;

    for (let i = 0; i < values.length; i++) {
        const currentValue = values[i];

        if (!checkIntValue(currentValue, minimal, maximal, true)) {
            return false;
        }

        let val = parseInt(currentValue, 10);

        if (val <= previousValue) {
            return false;
        } else {
            previousValue = val;
        }
    }

    return true;
}