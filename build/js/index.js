"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Soal Beginner
var MathOperations;
(function (MathOperations) {
    function add(a, b) {
        return a + b;
    }
    MathOperations.add = add;
    function subtract(a, b) {
        return a - b;
    }
    MathOperations.subtract = subtract;
})(MathOperations || (MathOperations = {}));
// Menggunakan namespace
console.log(MathOperations.add(10, 5)); // Output: 15
console.log(MathOperations.subtract(10, 5)); // Output: 5
// 2. Soal Beginner
var UserManagement;
(function (UserManagement) {
    function createUser(user) {
        console.log(`User Created: ${user.name} ${user.email}`);
    }
    UserManagement.createUser = createUser;
})(UserManagement || (UserManagement = {}));
// Mengecek menggunakan namespace
const newUser = {
    id: 1,
    name: "Aziz Alhadiid",
    email: "aziz@gmail.com"
};
UserManagement.createUser(newUser);
// 3. Soal Intermediate
const math_1 = require("./math");
console.log(math_1.MathUtils.multiply(10, 5)); // Output: 20
// 4. Soal Intermediate
var Company;
(function (Company) {
    let Departments;
    (function (Departments) {
        function getDepartmentName(id) {
            const departments = {
                1: "HR",
                2: "IT",
                3: "Finance"
            };
            return departments[id] || "Tidak Ada";
        }
        Departments.getDepartmentName = getDepartmentName;
    })(Departments = Company.Departments || (Company.Departments = {}));
})(Company || (Company = {}));
// Menggunakan namespace bersarang
console.log(Company.Departments.getDepartmentName(2)); // Output: IT
console.log(Company.Departments.getDepartmentName(5)); // Output: Unknown
// 5. Soal Intermediate
var Geometry;
(function (Geometry) {
    function circleArea(radius) {
        return Math.PI * radius * radius;
    }
    Geometry.circleArea = circleArea;
    function squareArea(side) {
        return side * side;
    }
    Geometry.squareArea = squareArea;
})(Geometry || (Geometry = {}));
// Menggunakan alias
var G = Geometry;
console.log(G.circleArea(7)); // Output: 153.93804002589985
console.log(G.squareArea(5)); // Output: 25
