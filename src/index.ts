function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("hello");
console.log(output);

let output2 = identity<number>(123);
console.log(output2);

let output3 = identity("<boolean>(true)");
console.log(output3);

interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingIdentity({ length: 10, value: 3 });


interface IProcessor<T> {
    result: T;
    process: (a: T, b: T) => T;
}

class NumberProcessor implements IProcessor<number> {
    result: number = 0;

    process(a: number, b: number): number {
        this.result = a + b; // ✅ Perbaiki 'B' menjadi 'b'
        return this.result;
    }
}

let np = new NumberProcessor();
let hasil = np.process(10, 20);
console.log(hasil); // 30

class Stack<T> {
    private items: T[] = [];

    push(element: T): void {
        this.items.push(element);
    }

    pop(): T | undefined {
        return this.items.pop();
    }
}

// ✅ Pindahkan pembuatan objek ke luar class
let stack = new Stack<number>();
stack.push(20);
stack.push(30);

console.log(stack.pop()); // 30
console.log(stack.pop()); // 20
