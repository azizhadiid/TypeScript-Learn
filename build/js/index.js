"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
let circle = new Circle(10);
console.log(circle.radius);
console.log(circle.getArea());
let person = {
    name: "John",
    hobbies: ["Sports", "Cooking"],
};
console.log(person.hobbies);
console.log(person.name);
let emp1 = {
    empCode: 1,
    empName: "John",
};
console.log(emp1);
let point = {
    x: 10,
    y: 20,
};
console.log(point);
