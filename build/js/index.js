"use strict";
class Employee {
    constructor(empCode, empName) {
        this.empCode = empCode;
        this.empName = empName;
    }
    getSalary(empCode) {
        if (empCode === this.empCode) {
            return 1000;
        }
        return 0;
    }
}
let emp = new Employee(1, "John");
console.log(emp.getSalary(1));
let p1 = { name: "John", age: 30 };
console.log(p1.name);
let hello = (name) => {
    return "Hello " + name;
};
console.log(hello("John"));
let arr1 = [1, 2, 3];
console.log(arr1);
function CreateSquare(config) {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = CreateSquare({ color: "black" });
console.log(mySquare);
let pp1 = { x: 10, y: 20 };
console.log(pp1.x);
class Coba {
    constructor(color, radius) {
        this.color = color;
        this.radius = radius;
    }
    area() {
        return this.radius * this.radius;
    }
}
let coba = new Coba("red", 10);
console.log(coba.area());
