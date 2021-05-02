"use strict";

function area() {
    let space = 0;
    let lenght = +prompt("Введите длину");
    let width = +prompt("Введите ширину");
    if (width == 0) {
        width = lenght;
    } else if (lenght == 0) {
        lenght = width;
    }
    return lenght * width;
}