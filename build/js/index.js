"use strict";
function identity(arg) {
    return arg;
}
let output = identity("hello");
console.log(output);
let output2 = identity(123);
console.log(output2);
let output3 = identity("<boolean>(true)");
console.log(output3);
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity({ length: 10, value: 3 });
class NumberProcessor {
    constructor() {
        this.result = 0;
    }
    process(a, b) {
        this.result = a + b; // ✅ Perbaiki 'B' menjadi 'b'
        return this.result;
    }
}
let np = new NumberProcessor();
let hasil = np.process(10, 20);
console.log(hasil); // 30
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
}
// ✅ Pindahkan pembuatan objek ke luar class
let stack = new Stack();
stack.push(20);
stack.push(30);
console.log(stack.pop()); // 30
console.log(stack.pop()); // 20
