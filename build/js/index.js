"use strict";
// cara mendeklarasikan array
// 1. menggunakan kurung siku
let fruits = ["apel", "jeruk", "mangga", "pisang"];
console.log(fruits);
let fruits2 = ["apel", "jeruk", "mangga", "pisang"];
console.log(fruits2);
let arr = [1, 3, "Apple", "Orange", true];
console.log(arr);
let arr2 = [1, 3, "Apple", "Orange", true];
console.log(arr2);
let fruits3;
fruits3 = ["apel", "jeruk", "mangga", "pisang"];
console.log(fruits3);
let ids;
ids = [1, 2, 3];
console.log(ids);
let values;
values = ["a", 1];
console.log(values);
let values2;
values2 = ["a", 1];
console.log(values2);
let fruits4 = ["apel", "jeruk", "mangga", "pisang"];
console.log(fruits4[0]);
for (let i = 0; i < fruits4.length; i++) {
    console.log(fruits4[i]);
}
for (let fruit of fruits4) {
    console.log(fruit);
}
fruits4.sort();
console.log(fruits4);
console.log(fruits4.reverse());
console.log(fruits4.indexOf("mangga"));
console.log(fruits4.concat(["mangga", "pisang"]));
let empId = 1;
let empName = "John";
let employee = [1, "John"];
console.log(employee);
let user;
user = [1, "John", true, 30, "admin"];
console.log(user);
let employee2;
employee2 = [
    [1, "John"],
    [2, "Peter"],
    [3, "Mary"],
];
console.log(employee2);
console.log(employee2[0][0]);
console.log(employee2[0][1]);
const readonlyTuple = [1, "John"];
// readonlyTuple[0] = 2;
console.log(readonlyTuple);
let numers;
numers = ["John", true, 30, 40, 50];
numers[2] = 400;
console.log(numers[0]);
console.log(numers[1]);
console.log(numers[2]);
numers.push(60, "admin");
console.log(numers);
