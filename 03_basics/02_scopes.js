// var c = 30;
let a = 300
if(true){
    let a = 30
    const b = 20
    console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const Website = "youtube"
        console.log(username + Website);
    }
    // console.log(Website);
}
// console.log(username);

// ++++++++++++++++++++++++ Interesting +++++++++++++++++++++++

console.log(addone(5));

function addone(num) {
    return num + 1
}


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))