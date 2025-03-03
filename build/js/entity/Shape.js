"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(color) {
        this._color = color;
    }
    getArea() {
        return 0;
    }
    showInfo() {
        console.log(`Color: ${this._color}`);
    }
}
exports.Shape = Shape;
