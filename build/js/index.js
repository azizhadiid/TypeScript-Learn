"use strict";
class Employee {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello, I am ".concat(this.name));
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
let emp = new Employee("Rizky");
emp.greet();
console.log(emp.getName());
emp.setName("Rizky Kurniawan");
console.log(emp.getName());
