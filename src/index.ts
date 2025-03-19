// 1. Soal Beginner 
class Person {
    nama: string;
    age: number;

    constructor(nama: string, age: number) {
        this.nama = nama;
        this.age = age;
    }

    menampilkanInfo(): void {
        console.log(`Nama Saya ${this.nama}, Berumur ${this.age}`);
    }
}

const person1 = new Person("Aziz", 20);
person1.menampilkanInfo();

// 2. Soal Beginner
class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposit: ${amount}, New Belance: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient funds!");
        } else {
            this.balance -= amount;
            console.log(`Withdraw: ${amount}, Remaining Belance: ${this.balance}`);
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(300);
console.log(`Saldo saat ini adalah: ${account.getBalance()}`);

// 3. Soal Intermediate
class Vehicle {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    move(): void {
        console.log(`${this.brand} is moving`);
    }
}

class Car extends Vehicle {
    move(): void {
        console.log(`${this.brand} car is moving fast!`);
    }
}

const myCar = new Car("Toyota");
myCar.move()

// 4. Soal Intermediate
abstract class Shape {
    abstract calculateArea(): number;
}

class Kotak extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

const myKotak = new Kotak(30, 4);
console.log(`Luas adalah: ${myKotak.calculateArea()}`);

// 5. Soal Intermediate
interface Animal {
    makeSound(): void;
}

class Dog implements Animal {
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

class Cat implements Animal {
    makeSound(): void {
        console.log("Meow! Meow!");
    }
}

function animalSound(animal: Animal) {
    animal.makeSound();
}

const myDog = new Dog();
const myCat = new Cat();

animalSound(myDog); // Output: Woof! Woof!
animalSound(myCat); // Output: Meow! Meow!

