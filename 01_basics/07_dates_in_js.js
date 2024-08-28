// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 6, 27)
// let myCreatedDate = new Date(2023, 6, 27, 5, 3)
// let myCreatedDate = new Date("2023-06-27")
// let myCreatedDate = new Date("06-27-2023")

// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {weekday: "long"})
)
