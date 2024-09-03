const user = {
    username: "Nagender",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "nagender"
//     console.log(this.username);
// }


// const chai = function(){
//     let username = "nagender"
//     console.log(this);
// }
// chai()

const chai = () => {
    let username = "nagender"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 +num2)

const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(2, 5));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()