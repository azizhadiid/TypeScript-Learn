let code: string | number;
code = "Hello";
code = 123;
// code = true;

let empId: (string | number) | null;
empId = "ini EMPID";
empId = 123;
empId = null;

function displayType(code: string | number) {
    if (typeof code === "string") {
        console.log(code.toUpperCase());
    } else {
        console.log(code.toFixed(2));
    }
}

displayType(1234);
displayType("Hello");

interface Fish {
    swim(): void;
    layEggs(): void;
}

interface Bird {
    fly(): void;
    layEggs(): void;
}

function getSmallPet(): Fish | Bird {
    return {
        swim: () => {
            console.log("Swimming");
        },
        layEggs: () => {
            console.log("laying eggs");
        },
    };
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

let pet = getSmallPet();
if (isFish(pet)) {
    pet.swim();
} else {
    pet.layEggs();
}