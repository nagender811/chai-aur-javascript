// const myName = "Nagender    ";
// console.log(myName.truelength);

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.nagender = function(){
    console.log(`nagender is present in all Objects`);
}

Array.prototype.heyNagender = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.nagender()
// myHeroes.nagender()
// myHeroes.heyNagender()
// heroPower.heyNagender()

// Inheritance 

const User = {
    name: "Vilen",
    email: "vilen@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: `Js Assignment`,
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "BrodhaV     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength()
"nagender".trueLength()
"vilen".trueLength()
