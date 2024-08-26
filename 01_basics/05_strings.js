const name = "Nagender"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo is ${repoCount}`);

const gameName = new String(`hitesh-hc-com`)

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(-8, 4)
console.log(newString);

const anotherString = gameName.slice(-12, 6)
console.log(anotherString);

const newStringOne = "   Nagender   "
console.log(newStringOne.trim());

const url = "https://nagender.com/nagender%20kumar"
console.log(url.replace('%20', '_'));

console.log(url.includes('nagender'));

console.log(url.split('%20'))

