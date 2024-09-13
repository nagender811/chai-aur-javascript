class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
    //  return this._password.toUpperCase();
     return `${this._password}nagender`;
    }

    set password(value){
        this._password = value
    }
}

const nagender = new User("n@gmail.com", "abc")
console.log(nagender.password); 
console.log(nagender.email);