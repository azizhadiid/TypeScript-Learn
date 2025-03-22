// 1. Soal Beginner
interface Person {
    name: string;
    age: number;
}

const person1: Person = {
    name: "Aziz",
    age: 20
};

console.log(person1);

// 2. Soal Beginner
interface Product {
    name: string;
    price: number;
    discount?: number;
}

const product1: Product = {
    name: "Laptop",
    price: 15000000
};

const product2: Product = {
    name: "Smartphone",
    price: 7000000,
    discount: 10
};

console.log(product1);
console.log(product2);

// 3. Soal Intermediate
interface MathOperation {
    calculate: (a: number, b: number) => number;
}

const addition: MathOperation = {
    calculate: (a, b) => a + b
};

const multiplication: MathOperation = {
    calculate: (a, b) => a * b
};

console.log(addition.calculate(5, 3)); // Output: 8
console.log(multiplication.calculate(5, 3)); // Output: 15

// 4. Soal Intermediate
interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    breed: string;
}

const myDog: Dog = {
    name: "Buddy",
    age: 3,
    breed: "Golden Retriever"
};

console.log(myDog);

interface User {
    readonly id: number;
    username: string;
}

const user1: User = {
    id: 101,
    username: "john_doe"
};

console.log(user1);

// Coba ubah id (ini akan error)
// user1.id = 102; // Error: Cannot assign to 'id' because it is a read-only property.
