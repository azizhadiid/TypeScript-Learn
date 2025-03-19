"use strict";
// 1. Soal Beginner 
class Person {
    constructor(nama, age) {
        this.nama = nama;
        this.age = age;
    }
    menampilkanInfo() {
        console.log(`Nama Saya ${this.nama}, Berumur ${this.age}`);
    }
}
const person1 = new Person("Aziz", 20);
person1.menampilkanInfo();
// 2. Soal Beginner
class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposit: ${amount}, New Belance: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds!");
        }
        else {
            this.balance -= amount;
            console.log(`Withdraw: ${amount}, Remaining Belance: ${this.balance}`);
        }
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(300);
console.log(`Saldo saat ini adalah: ${account.getBalance()}`);
// 3. Soal Intermediate
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    move() {
        console.log(`${this.brand} is moving`);
    }
}
class Car extends Vehicle {
    move() {
        console.log(`${this.brand} car is moving fast!`);
    }
}
const myCar = new Car("Toyota");
myCar.move();
// 4. Soal Intermediate
class Shape {
}
class Kotak extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const myKotak = new Kotak(30, 4);
console.log(`Luas adalah: ${myKotak.calculateArea()}`);
class Dog {
    makeSound() {
        console.log("Woof! Woof!");
    }
}
class Cat {
    makeSound() {
        console.log("Meow! Meow!");
    }
}
function animalSound(animal) {
    animal.makeSound();
}
const myDog = new Dog();
const myCat = new Cat();
animalSound(myDog); // Output: Woof! Woof!
animalSound(myCat); // Output: Meow! Meow!
