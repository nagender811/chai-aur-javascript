// primtive

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outSideTemp = null 
let userEmail;

const Id = Symbol('123')
const anotherId = Symbol('123')

console.log(Id === anotherId);
console.log(typeof Id);

const bigNumber = 587767963434343n
console.log(typeof bigNumber)

// Reference (Non Primitive) => Array, Objects, Functions

const heroes = ["Shaktiman", "Nagraj", "Doga"];
console.log(heroes);
console.log(typeof heroes);

let myObj = {
    name: "Nagender",
    age: 19,
}
console.log(myObj);
console.log(typeof myObj);

const myFunction = function(){
    console.log("Hello world");
}

console.log(myFunction)
console.log(typeof myFunction);


// ******************************************************************
//Stack (Primitive datatype),  heap(Non-primitive datatype)

let myName = "Nagender"
let anotherName = myName
anotherName = " Golu"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "nagender@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "nk@google.com"

console.log(userOne.email);
console.log(userTwo.email);





