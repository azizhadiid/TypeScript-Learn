"use strict";
const person1 = {
    name: "Aziz",
    age: 20
};
console.log(person1);
const product1 = {
    name: "Laptop",
    price: 15000000
};
const product2 = {
    name: "Smartphone",
    price: 7000000,
    discount: 10
};
console.log(product1);
console.log(product2);
const addition = {
    calculate: (a, b) => a + b
};
const multiplication = {
    calculate: (a, b) => a * b
};
console.log(addition.calculate(5, 3)); // Output: 8
console.log(multiplication.calculate(5, 3)); // Output: 15
const myDog = {
    name: "Buddy",
    age: 3,
    breed: "Golden Retriever"
};
console.log(myDog);
const user1 = {
    id: 101,
    username: "john_doe"
};
console.log(user1);
// Coba ubah id (ini akan error)
// user1.id = 102; // Error: Cannot assign to 'id' because it is a read-only property.
