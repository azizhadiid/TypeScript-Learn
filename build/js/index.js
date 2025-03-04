"use strict";
function diplay() {
    console.log("Hello World");
}
diplay();
function sum(x, y) {
    return x + y;
}
console.log(sum(1, 2));
let greeting = function () {
    console.log("Hello World");
};
greeting();
let sum2 = function (x, y) {
    return x + y;
};
console.log(sum2(1, 2));
function greet(greeting, name) {
    console.log(`${greeting} ${name}`);
}
greet("Hello", "World");
// greet("Hello");
function greet2(greeting, name) {
    console.log(`${greeting} ${name}`);
}
greet2("Hello");
greet2("Hello", "World");
//default parameter
function applyDiscount(price, discount = 0.05) {
    return price * (1 - discount);
}
console.log(applyDiscount(100));
console.log(applyDiscount(100, 0.1));
function getDay(year = new Date().getFullYear(), month) {
    let day = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
                day = 29;
            }
            else {
                day = 28;
            }
            break;
        default:
            throw Error("Invalid month");
    }
    return day;
}
console.log(getDay(2020, 2));
console.log(getDay(undefined, 2));
function sumz(...numbers) {
    let result = 0;
    for (let num of numbers) {
        result += num;
    }
    return result;
}
console.log(sumz());
console.log(sumz(1, 2, 3));
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
console.log(add("Hello ", "world"));
let tambah = (x, y) => {
    return x + y;
};
console.log(tambah(1, 2));
let tabbah2 = (x, y) => x + y;
console.log(tabbah2(1, 2));
