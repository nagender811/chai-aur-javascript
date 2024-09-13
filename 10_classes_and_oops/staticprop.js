class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log( `Username: ${this.username}`);
    } 
    static createId(){
        return '322'
    }
}

const vilen = new User("vilen")
// console.log(vilen.createid());    --> Gives error because function set as static

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const nagender = new Teacher("Nagender", "nagender@gamil.com")
console.log(nagender.createId());  // --> Gives error because function set as static
