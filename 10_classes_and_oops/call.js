function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("Called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const vilen = new createUser("vilen", "vilen@gmail,com", "2445")

console.log(vilen);