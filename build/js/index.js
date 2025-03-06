"use strict";
class Hewan {
    constructor(age) {
        this.age = age;
    }
    makan() {
        console.log(`${this.name} sedang makan`);
    }
}
class Kucing extends Hewan {
    constructor(name, age) {
        super(age);
        this.name = name;
    }
    bersuara() {
        console.log("Miau");
    }
}
let kucing = new Kucing("Kucing", 2);
kucing.bersuara();
kucing.makan();
class Kendaraan {
    jalan() {
        console.log("Jalan");
    }
}
class Mobil extends Kendaraan {
    constructor(roda, bensin) {
        super();
        this.roda = roda;
        this.bensin = bensin;
    }
    isiBensin(liter) {
        this.bensin += liter;
    }
    klakson() {
        console.log("Klakson Mobil");
    }
}
let mobil = new Mobil(4, 100);
mobil.klakson();
mobil.isiBensin(50);
mobil.jalan();
