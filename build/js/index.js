"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Accunt_1 = require("./entity/Accunt");
const Animal_1 = require("./entity/Animal");
const Shape_1 = require("./entity/Shape");
//membuat objek
let animal = new Animal_1.Animal("Lion", 10);
animal.showInfo();
class Dog extends Animal_1.Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    showInfo() {
        super.showInfo();
        console.log(`My breed is ${this.breed}`);
    }
}
let dog = new Dog("Max", 10, "German Shepherd");
dog.showInfo();
let account = new Accunt_1.Accunt(1, "Max", 100);
account.id = 100;
account.deposit(100000);
console.log(account);
class Circle extends Shape_1.Shape {
    constructor(color, radius) {
        super(color);
        this._radius = radius;
    }
    getArea() {
        return Math.PI * this._radius * this._radius;
    }
    showInfo() {
        super.showInfo();
        console.log(`My radius is ${this.getArea()}`);
    }
}
class Ractangle extends Shape_1.Shape {
    constructor(color, width, height) {
        super(color);
        this._width = width;
        this._height = height;
    }
    getArea() {
        super.getArea();
        return this._width * this._height;
    }
    showInfo() {
        super.showInfo();
        console.log(`My width is ${this.getArea()}`);
    }
}
let shape1 = new Circle("red", 10);
let shape2 = new Ractangle("blue", 10, 10);
console.log(shape1.getArea());
console.log(shape2.getArea());
shape1.showInfo();
shape2.showInfo();
