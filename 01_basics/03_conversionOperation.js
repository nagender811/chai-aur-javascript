let score = "Nagender"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// Conversion in Number:

// "33" => 33
// "33abc" => NaN(Not a Number)
// true => 1; false => 0
// null => 0
// undefined => NaN


let isLoggedIn = 1

let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn)


// Boolean Conversion:

// 1 => true; false => 0
// "" => false
// "Golu" => true
// null, undefined => false


// String Conversion
let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber))


// **************************** Operations **************************

let value = 3 
let negValue = -value

console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // 2 to the power 3
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " world" 

let str3 = str1 + str2
console.log(str3)

console.log("1" + "2")
console.log("1" + 2)
console.log("1" + 2 + 2)
console.log(1 + 2 + "3")


console.log((3 + 4) * 5 % 3);

console.log(+true)
console.log(+"")

let num1, num2, num3, num4
num1 = num2 = num3 = num4 = 2+2;
console.log(num4)

let gameCounter = 100
++gameCounter;
console.log(gameCounter);




