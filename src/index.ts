// 1. Soal Beginner
let tambah = (a: number, b: number): number => {
    return a + b;
};

console.log(tambah(5, 10)); // Output: 15

// 2. Soal Beginner
let greet = (name: string, message?: string): string => {
    return `${message ?? "Hello"}, ${name}!`;
}

console.log(greet("John"));        // Output: Hello, John!
console.log(greet("Jane", "Hi"));  // Output: Hi, Jane!

// 3. Soal Intermediate
let calculatorArea = (width: number = 1, height: number = 1): number => {
    return width * height;
}

console.log(calculatorArea());         // Output: 1 (karena default width=1 dan height=1)
console.log(calculatorArea(5));        // Output: 5 (karena height=1 default)
console.log(calculatorArea(5, 10));    // Output: 50

// 4. Soal Intermediate
let operator = (a: number, b: number, callback: (x: number, y: number) => number): number => {
    return callback(a, b);
}

const add = (x: number, y: number) => x + y;
const multiply = (x: number, y: number) => x * y;

console.log(operator(5, 3, add));       // Output: 8 (5 + 3)
console.log(operator(5, 3, multiply));  // Output: 15 (5 * 3)

// 5. Soal Intermediate
let format = (value: string | number): string => {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else {
        return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(value);
    }
}

console.log(format("hello"));  // Output: HELLO
console.log(format(10000));    // Output: Rp10.000,00

// 6. Soal Intermediate
const createMultiplier = (factor: number): (num: number) => number => {
    return (num: number) => num * factor;
};

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10 (5 * 2)
console.log(triple(5)); // Output: 15 (5 * 3)

// 7. Soal Intermediate
let factorial = (n: number): number => {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
console.log(factorial(7)); // Output: 5040
console.log(factorial(0)); // Output: 1
