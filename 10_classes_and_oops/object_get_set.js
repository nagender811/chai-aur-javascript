const User = {
    _email: 'b@gmail.com',
    _password: "brodhav",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const brodhav = Object.create(User)
console.log(brodhav.email);