// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//             return `${this.username.toUpperCase()}`
//     }
// }

// const brodhV = new User("brodhaV", "brodhv@gmail.com", "2442")

// console.log(brodhV.encryptPassword());
// console.log(brodhV.changeUsername());

// behind the scene

function User(username, email, password){
    this.username = username
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const vilen = new User("vilen", "vilen@gmail.com", "4534")

console.log(vilen.encryptPassword());
console.log(vilen.changeUsername());
