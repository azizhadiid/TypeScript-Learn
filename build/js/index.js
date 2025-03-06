"use strict";
// access modifier
// 1. private -> hanya bisa diacess oleh class itu sendiri
// 2. public -> bisa diacess oleh semua class
// 3. protected -> bisa diacess oleh class itu sendiri dan class turunannya saja
// 4. tanfa definisi -> berlaku defaulat yaitu public
class Account {
    constructor(id, name, balance) {
        this._id = id;
        this._name = name;
        this._balance = balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        this._balance = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
let account = new Account(1, "abc", 1000);
console.log(account.balance);
class Bnatang {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
let binatang = new Bnatang("abc", 10);
binatang.name = "TEsting Binatang";
binatang.showInfo();
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
// let animal = new Animal("abc", 10);
// animal.name = "Kucing";
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    showInfo2() {
        super.showInfo();
        console.log(`Breed: ${this.breed} dan Age: ${this.age} dan Name: ${this.name}`);
    }
}
let dog = new Dog("abc", 10, "Lab");
dog.showInfo2();
class Manusia {
    constructor(nama) {
        this.nama = nama;
    }
    setNama(nama) {
        this.nama = nama;
    }
}
let mhs = new Manusia("abc");
mhs.setNama("Muhammad");
console.log(mhs.nama);
