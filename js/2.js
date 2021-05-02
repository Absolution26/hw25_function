"use strict";

function fact() {
    let num = 1;
    let a = +prompt("Введите число, факториал которого хотите найти");

    for (let i = 1; i <= a; i++) {
        num = i * num;
    }
    return num;
}

