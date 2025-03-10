"use strict";
let code;
code = "Hello";
code = 123;
// code = true;
let empId;
empId = "ini EMPID";
empId = 123;
empId = null;
function displayType(code) {
    if (typeof code === "string") {
        console.log(code.toUpperCase());
    }
    else {
        console.log(code.toFixed(2));
    }
}
displayType(1234);
displayType("Hello");
function getSmallPet() {
    return {
        swim: () => {
            console.log("Swimming");
        },
        layEggs: () => {
            console.log("laying eggs");
        },
    };
}
function isFish(pet) {
    return pet.swim !== undefined;
}
let pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.layEggs();
}
