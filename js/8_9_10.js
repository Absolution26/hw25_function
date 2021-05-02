"use strict"

// task 8
function inSeconds(hour, minute, second) {
    hour = hour * 3600;
    minute = minute * 60;
    return hour + minute + second;
}
//task 9
function fromSeconds(second) {
    let hour = second / 3600;
    let minute = (second - (Math.floor(hour) * 3600)) / 60;
    let secondOfTime = second % 60;
    return Math.floor(hour) + ':' + Math.floor(minute) + ':' + Math.floor(secondOfTime);
}
//task 10
function difference(h, m, s, h1, m1, s1) {
    let diff = 0;
    let firstDate = inSeconds(h, m, s)
    let secondDate = inSeconds(h1, m1, s1)

    if (firstDate > secondDate) {
        diff = firstDate - secondDate;
        return fromSeconds(diff);
    } else if (firstDate < secondDate) {
        diff = secondDate - firstDate;
        return fromSeconds(diff);
    }
}

