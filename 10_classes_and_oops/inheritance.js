class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const nagender = new Teacher("Nagender", "nagender@gmail.com", "1234")
nagender.logMe();
nagender.addCourse();

const satish = new User("Satish")
satish.logMe()

console.log(nagender instanceof User);