"use strict";
let id = 5;
let company = "napster Labs";
let ispublished = true;
let x = "Mango";
let ids = [1, 2, 3, 4, 5];
let arr = [1, "aditya", true, 4, 5];
//Tuple
let person = [2, "adi", true, "yes"];
let employee;
employee = [
    [1, "adi"],
    [2, "mohit"],
    [3, "john"],
];
let pid = 23;
//Enums
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 5] = "down";
    Direction[Direction["left"] = 3] = "left";
    Direction[Direction["right"] = 4] = "right";
})(Direction || (Direction = {}));
console.log(Direction.right);
//objects
const user = {
    id: 2,
    name: "aditya",
};
const user2 = {
    name: "mohit",
    id: 3,
};
//type assertion
let cid = 34;
let custId = cid;
let custId2 = cid;
console.log(custId, custId2);
//functions
function addNum(x, y) {
    return x + y;
}
function addNum2(x, y) {
    console.log(x + y);
}
console.log(addNum(2, 3));
const User2 = {
    id: 2,
    name: "mohit",
};
// interface Point2 number | string   --not valid
const p1 = 1;
const p2 = "one";
const f = (x, y) => x + y;
const f2 = (x, y) => x * y;
class Person {
    constructor(id, name) {
        this.name = name;
        this.id = id;
    }
    register() {
        return `${this.name} is registered`;
    }
}
//subclass
class Theif extends Person {
    constructor(id, name, inJail) {
        super(id, name);
        this.inJail = inJail;
    }
}
