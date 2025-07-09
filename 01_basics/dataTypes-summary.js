// Primitive

// 7 types : String, Number, Boolean, null, Undefined, Symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 36873466541965n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "akshat",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World");    
}

console.log(typeof myFunction);
