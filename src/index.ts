class Circle {
    readonly radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

let circle = new Circle(10);
console.log(circle.radius);
console.log(circle.getArea());
