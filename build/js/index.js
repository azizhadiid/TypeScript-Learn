"use strict";
// Implisit Variabel
let x = 10;
let y = "Hello";
console.log(x, y);
// Explicit Variable
let z;
z = 10;
let w = "hello";
console.log(z, w);
// Untuk Membuat Variable
// let, const, var
let a = 10;
console.log(a);
var b = 20;
console.log(b);
const c = 30;
console.log(c);
// Cangkupan untuk mengetes cangkupan variable
function testVar() {
    var d = 10;
    if (true) {
        var d = 20; // mengubah nilai
        console.log(d);
    }
    console.log(d);
}
testVar();
// Menggunakan let
function testLet() {
    let e = 10;
    if (true) {
        let e = 20; // mengubah nilai
        console.log(e);
    }
    console.log(e);
}
testLet();
