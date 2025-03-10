"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction);
console.log(Direction.Up);
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2);
console.log(Direction2.Up);
var Direction3;
(function (Direction3) {
    Direction3[Direction3["Up"] = 1] = "Up";
    Direction3[Direction3["Down"] = 2] = "Down";
    Direction3[Direction3["Left"] = 3] = "Left";
    Direction3[Direction3["Right"] = 4] = "Right";
})(Direction3 || (Direction3 = {}));
console.log(Direction3);
console.log(Direction3.Up);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["InternalServerError"] = 500] = "InternalServerError";
    StatusCodes[StatusCodes["Succes"] = 200] = "Succes";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes);
console.log(StatusCodes.NotFound);
var Color;
(function (Color) {
    Color["RED"] = "F0F0F0";
})(Color || (Color = {}));
console.log(Color.RED);
var Senum;
(function (Senum) {
    Senum["Up"] = "up";
    Senum["Down"] = "down";
    Senum["Left"] = "left";
    Senum["Right"] = "right";
})(Senum || (Senum = {}));
console.log(Senum);
var Response3;
(function (Response3) {
    Response3[Response3["No"] = 0] = "No";
    Response3[Response3["Yes"] = 1] = "Yes";
})(Response3 || (Response3 = {}));
function answer(question, response) {
    console.log(question, response);
}
answer("Do you like TypeScript", Response3.Yes);
var Direction4;
(function (Direction4) {
    Direction4[Direction4["Up"] = 0] = "Up";
    Direction4[Direction4["Down"] = 1] = "Down";
    Direction4[Direction4["Left"] = 2] = "Left";
    Direction4[Direction4["Right"] = 3] = "Right";
})(Direction4 || (Direction4 = {}));
console.log(Direction4.Up);
console.log(Direction4[0]);
console.log(Direction4[3]);
