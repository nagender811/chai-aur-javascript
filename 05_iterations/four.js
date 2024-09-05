// for in

const myObject ={
    js: 'Javascript',
    Cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortuct is for ${myObject[key]}`);
}

const programming = ["js", "cpp", "rb", "py", "java"]

for(const key in programming){
    // console.log(key);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "Unites State of America")
map.set('Fr', "France")
map.set('Af', "Africa")

// for(const key in map){
//     console.log(key);
// }