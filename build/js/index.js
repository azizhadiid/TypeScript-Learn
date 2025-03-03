"use strict";
let a;
a = 1;
a = "1";
a = true;
a = {};
a = [];
a = null;
a = undefined;
console.log(a);
// Tipe data any di tempatkan pada array
let arr = ["Jon", 121, true];
arr[0] = "Jon Wik";
arr.push("Smit");
console.log(arr);
// type data unknown
let w = 1;
w = "string";
w = {
    runNonExixtsMethod: () => {
        console.log("runNonExixtsMethod contoh 2");
    },
};
if (typeof w === "object" && w !== null) {
    w.runNonExixtsMethod();
}
// type data never
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
// throwError("error");
function assertNever(x) {
    throw new Error("error" + x);
}
function printAnimal(animal) {
    switch (animal) {
        case "cat":
            console.log("meow");
            break;
        case "dog":
            console.log("woof");
            break;
        case "bird":
            console.log("tweet");
            break;
        default:
            assertNever(animal);
    }
}
printAnimal("cat");
let nothing;
// nothing= null;
// nothing= undefined;
// nothing="hello";
