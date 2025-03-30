"use strict"; //treat all js code as a new version of javaScript(ECMAScript 6);

// alert(2+2); we get alert box in browser for that we have to run it with html file;
// prompt("enter something"); // it will ask for input in a box and return the value entered by user in browser;

// Code readability should be high and  maintained by using proper indentation and spacing;

// there are documentations for users one is mdn and other is (tc39.es);

// DATATYPES=>

    

// 1. Primitive data types => string, number, boolean, null, undefined, symbol, bigint;
// 2. Non-primitive data types => object, array, function;
// 3. Special data types => NaN, Infinity, -Infinity;
// 4. User defined data types=> class, interface, enum;


let Name  = "Dhruv"; // string
let age = 20; // number
let isStudent = true; // boolean
console.log(typeof Name); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean
console.log(typeof null); // object (this is a bug in js)
console.log(typeof undefined); // undefined
console.log(typeof Symbol("symbol")); // symbol
console.log(typeof BigInt(12345678901234567890)); // bigint
console.log(typeof NaN); // number (this is a bug in js)
console.log(typeof Infinity); // number

// symbol is used for unique identifiers, it is a primitive data type that is used to create unique keys for object properties. It is not enumerable and cannot be accessed using dot notation or bracket notation. It is used to create private properties in objects.
// Example:
const uniqueId = Symbol("id"); // unique identifier
console.log(uniqueId); // Symbol(id) (it will print the symbol value)

const obj = {
    [uniqueId]: 12345 // unique key for object property
};  // if we use bracket with unique id then it will be used as key for object property and when we use dot notation then it will give undefined value. and vice versa.

console.log(obj); // {Symbol(id): 12345} (it will print the object with unique key)
console.log(obj[uniqueId]); // 12345
console.log(typeof uniqueId); // symbol
console.log(obj.uniqueId); // undefined (cannot access using dot notation)


// Difference between null and undefined
null // null is an assignment value, it can be assigned to a variable as a representation of no value it is a standalone value.
undefined // undefined is a type itself, it is a variable that has been declared but has not yet been assigned a value. It is also a property of the global object. If you declare a variable without assigning a value to it, it will be undefined by default.
// Example:
let x; // x is declared but not assigned a value, so it is undefined.   
let y = null; // y is assigned a null value, which means it has no value.



