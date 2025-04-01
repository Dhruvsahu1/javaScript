// Primitive

// 7 types of primitive data types in JavaScript
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol (ES6)
// 7. BigInt (ES11)



const score = 33;
console.log(typeof score); // number
const anotherScore = 33.33;
console.log(typeof anotherScore); // number

const isLoggedIn  = true; // boolean

const outSideTemp = null; // null
let userEmail; // undefined

const id = Symbol("123"); // Symbol
const anotherId = Symbol("123"); // Symbol (unique and immutable)
console.log(id === anotherId); // false (unique and immutable)
console.log(id == anotherId); // false (unique and immutable)

// Although these two were show the same result but the id they were generated are different and unique.
// So we can use them as unique identifiers for objects or properties.

console.log(id); // Symbol(123) (unique and immutable)
console.log(anotherId); // Symbol(123) (unique and immutable)


const bigNumber = BigInt(1234567890123456789012345678901234567890); // BigInt (ES11)
console.log(bigNumber); // 1234567890123456789012345678901234567890n (BigInt)   
console.log(typeof bigNumber); // bigint (BigInt)

const nym = 23345667788846778889898877n // BigInt (ES11)
console.log(typeof nym); // bigint (BigInt)



// reference (Non primitive dataTypes)

// Array , Object , Function 

// Arrays
 
const heroes = ["IronMan" , "Captain America" , "Thor" , "Hulk" , "Black Widow"]; // Array

// objects 
const user = {
    name: "Dhruv",
    age: 22,
    isLoggedIn: true,
    friends: ["Paras" , "Ankit" , "Anuj"],
    address: {
        city: "MAthura",
        state: "Uttar Pradesh",
        country: "India"
    },
    sayHello: function() {
        console.log("Hello World!");
    }
} // Object

// function
const sayHello = function sayHello() {
    console.log("Hello World!");
} // Function

console.log(typeof heroes); // object (Array is a type of object)
console.log(typeof user); // object (Object is a type of object)
console.log(typeof sayHello); // function (Function is a type of object)
// but this function is a special type of object that can be called or invoked.
// So we can say that function is a type of object in JavaScript.


// for more read here 
// https://262.ecma-international.org/5.1/#sec-11.4.3
