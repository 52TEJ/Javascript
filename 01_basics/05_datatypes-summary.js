// #Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 345678765432568754456n



// #Reference (Non - Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "tejz",
    age: 24,
}

const myFunction = function() {
    console.log("hello World!");
}

console.log(typeof anotherId);

// Doc link: https://262.ecma-international.org/5.1/#sec-11.4.3


// ******************************** typeof Operator Results **************************************

//              Type of val                                         Result

//              Undefined	                                        "undefined"
//              Null	                                            "object"
//              Boolean	                                            "boolean"
//              Number	                                            "number"
//              String	                                            "string"