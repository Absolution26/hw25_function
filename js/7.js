"use strict";

// Написать функцию, которая принимает время (часы, минуты, секунды) 
// и выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

function time() {
    let hour = +prompt("Введите часы")
    let minute = +prompt("Введите минуты")
    let second = +prompt("Введите секунды")

    if (hour < 24 && hour > 0) {
        hour = hour;
    } else {
        hour = '00';
    }
    if (minute < 60 && minute > 0) {
        minute = minute;
    } else {
        minute = '00';
    }
    if (second < 60 && second > 0) {
        second = second;
    } else {
        second = '00';
    }
    alert(Math.floor(hour) + ':' + Math.floor(minute) + ':' + Math.floor(second));
}

