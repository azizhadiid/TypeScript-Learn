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
