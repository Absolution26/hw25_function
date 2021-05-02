'use strict';

function perfect(num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        if (num % i == 0) {
            sum = sum + i;
        }
    }
    if (sum == num) {
        console.log(num);
    }
}

function area(begin, end) {
    for (let i = begin; i < end; i++) {
        perfect(i);
    }
}
