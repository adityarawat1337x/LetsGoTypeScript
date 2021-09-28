let id: number = 5;
let company: string = "napster Labs";
let ispublished: boolean = true;
let x: any = "Mango";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, "aditya", true, 4, 5];

//Tuple
let person: [number, string, boolean, string] = [2, "adi", true, "yes"];

let employee: [number, string][];

employee = [
  [1, "adi"],
  [2, "mohit"],
  [3, "john"],
];

let pid: number | string = 23;

//Enums

enum Direction {
  up = 1,
  down = 5,
  left = 3,
  right,
}

console.log(Direction.right);

//objects

const user: { id: number; name: string } = {
  id: 2,
  name: "aditya",
};

//or

type User = {
  id: number;
  name: string;
};

const user2: User = {
  name: "mohit",
  id: 3,
};

//type assertion
let cid: any = 34;
let custId = <number>cid;
let custId2 = cid as number;
console.log(custId, custId2);

//functions

function addNum(x: number, y: number): number {
  return x + y;
}

function addNum2(x: number, y: number): void {
  console.log(x + y);
}

console.log(addNum(2, 3));

//interfaces

interface userInter {
  readonly id: number; //readOnly or immutable
  name: string;
  age?: number; //optional
}

const User2: userInter = {
  id: 2,
  name: "mohit",
};

//type vs interface
type Point = number | string;
// interface Point2 number | string   --not valid

const p1: Point = 1;
const p2: Point = "one";

//interface with functions

interface MathFunc {
  (x: number, y: number): number;
}

const f: MathFunc = (x: number, y: number) => x + y;
const f2: MathFunc = (x: number, y: number) => x * y;

//classes

interface personInter {
  id: number;
  name: string;
  register(): string;
}

class Person implements personInter {
  name: string;
  id: number;
  constructor(id: number, name: string) {
    this.name = name;
    this.id = id;
  }

  register() {
    return `${this.name} is registered`;
  }
}

//subclass
class Theif extends Person {
  inJail: boolean;
  constructor(id: number, name: string, inJail: boolean) {
    super(id, name);
    this.inJail = inJail;
  }
}
