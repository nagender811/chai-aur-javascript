const accountId = 86543
let accountEmail = "Nagender@google.com"
var accountPassword = "54672"
accountCity = "Badarpur"
let accountState;

// accountId = 98 // not allowed because it set as constant

accountEmail = "nk@nk.com"
accountPassword = "987857"
accountCity += "Faridabad"

console.log(accountId)

/*
Prefer not to use var 
becaause of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


