enum Direction {
    Up,
    Down,
    Left,
    Right,
}
console.log(Direction);
console.log(Direction.Up);

enum Direction2 {
    Up = 1,
    Down,
    Left,
    Right,
}

console.log(Direction2);
console.log(Direction2.Up);

enum Direction3 {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4,
}

console.log(Direction3);
console.log(Direction3.Up);

enum StatusCodes {
    NotFound = 404,
    BadRequest = 400,
    InternalServerError = 500,
    Succes = 200,
}

console.log(StatusCodes);
console.log(StatusCodes.NotFound);

enum Color {
    RED = "F0F0F0",
}

console.log(Color.RED);

enum Senum {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right',
}

console.log(Senum);

enum Response3 {
    No = 0,
    Yes = 1,
}

function answer(question: string, response: Response3) {
    console.log(question, response);
}

answer("Do you like TypeScript", Response3.Yes);

enum Direction4 {
    Up,
    Down,
    Left,
    Right,
}

console.log(Direction4.Up);
console.log(Direction4[0]);
console.log(Direction4[3]);