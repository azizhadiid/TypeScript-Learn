"use strict";
// type data number
let x;
x = 10; //nilangan bulat
x = 3.14; //bilangan desimal
x = 0b1010; //bilangan biner
x = 0o12; //bilangan octal
x = 0x12; //bilangan hexadecimal
// type data string
let y;
y = "Hello World";
y = "Hello World";
y = `Hello World${x}`;
// type data boolean
let z;
z = true;
z = false;
// bigint
let big;
big = 100n;
// symbol
let symbol;
symbol = Symbol("Hello World");
// null
let nul;
nul = null;
// undefined
let und;
und = undefined;
let nik = "nik001";
let namaLengkap = "Nikolaus";
let indexLembur = 160;
let basicSalary = 100000;
let uangLembur = (indexLembur / 173) * basicSalary;
console.log("NIk = " + nik);
console.log("Nama Lengkap = " + namaLengkap);
console.log("Index Lembur = " + indexLembur);
console.log("Basic Salary = " + basicSalary);
console.log("Uang Lembur = " + uangLembur.toLocaleString("id-ID"));
