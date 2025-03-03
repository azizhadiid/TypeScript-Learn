"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    //membuat konstruktor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // menthod animal
    showInfo() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}
exports.Animal = Animal;
