//  Primitive datatypes

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


//symbol datatypes different datatypes always
const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) datatpes 

// Array, Objects, Functions
// array
const heros = ["shaktiman", "naagraj", "doga"];
//object
let myObj = {
    name: "hitesh",
    age: 22,
}
//function 
const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3