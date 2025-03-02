let say: string;
say = "Hello";
console.log(say);

function tambah(a: number, b: number): number {
    return a + b;
}
console.log(tambah(1, 2));

let mobil: {
    merk: string; tahun: number
};
mobil = {
    merk: "Toyota",
    tahun: 2020,
};
console.log(mobil.merk);

function contoh(): MethodDecorator {
    return function (
        target: Object,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) {
        console.log("Contoh dijalankan");
    };
}

class Example {
    @contoh()
    method() {
        console.log("Method dipanggil");
    }
}

new Example().method();
