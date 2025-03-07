"use strict";
class MathUtil {
    static getCalculateArea(radius) {
        return MathUtil.PI * radius * radius;
    }
}
MathUtil.PI = 3.14;
console.log(MathUtil.PI);
console.log(MathUtil.getCalculateArea(5));
class Employee {
    constructor(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        Employee.headcount++;
    }
    static getHeadCount() {
        return Employee.headcount;
    }
}
Employee.headcount = 0;
let jon = new Employee("Jon", "Snow", "King");
let anna = new Employee("Anna", "Snow", "Queen");
console.log("nilai = " + Employee.getHeadCount());
console.log("nilai = " + Employee.headcount);
