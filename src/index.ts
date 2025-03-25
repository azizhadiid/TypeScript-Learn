// 1. Soal Beginner
namespace MathOperations {
    export function add(a: number, b: number): number {
        return a + b;
    }

    export function subtract(a: number, b: number): number {
        return a - b;
    }
}

// Menggunakan namespace
console.log(MathOperations.add(10, 5));       // Output: 15
console.log(MathOperations.subtract(10, 5));  // Output: 5

// 2. Soal Beginner
namespace UserManagement {
    export interface User {
        id: number;
        name: string;
        email: string;
    }

    export function createUser(user: User): void {
        console.log(`User Created: ${user.name} ${user.email}`);
    }
}

// Mengecek menggunakan namespace
const newUser: UserManagement.User = {
    id: 1,
    name: "Aziz Alhadiid",
    email: "aziz@gmail.com"
};

UserManagement.createUser(newUser);

// 3. Soal Intermediate
import { MathUtils } from "./math";

console.log(MathUtils.multiply(10, 5)); // Output: 20

// 4. Soal Intermediate
namespace Company {
    export namespace Departments {
        export function getDepartmentName(id: number): string {
            const departments: { [key: number]: string } = {
                1: "HR",
                2: "IT",
                3: "Finance"
            };
            return departments[id] || "Tidak Ada";
        }
    }
}

// Menggunakan namespace bersarang
console.log(Company.Departments.getDepartmentName(2));  // Output: IT
console.log(Company.Departments.getDepartmentName(5));  // Output: Unknown

// 5. Soal Intermediate
namespace Geometry {
    export function circleArea(radius: number): number {
        return Math.PI * radius * radius;
    }

    export function squareArea(side: number): number {
        return side * side;
    }
}

// Menggunakan alias
import G = Geometry;

console.log(G.circleArea(7));   // Output: 153.93804002589985
console.log(G.squareArea(5));   // Output: 25