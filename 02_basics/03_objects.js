// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Nagender",
    "full name": "Nagender Kumar",
    [mySym]: "myKey1",
    age: 18,
    location: "Delhi",
    email: "nagender@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(JsUser["lastLoginDays"]);

JsUser.email = "nagender@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "nagender@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());