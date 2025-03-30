// var ,let and const are the three ways to declare variables in JavaScript.
// var is function scoped or globally scoped
// let and const are block scoped
// var can be redeclared and updated
// let can be updated but not redeclared    
// const can neither be updated nor redeclared
// var is hoisted to the top of the function or global scope
// let and const are hoisted to the top of the block scope but not initialized

var a  =10;// declared and initialized
console.log("a = " +a);//10

var a =20; // redeclared
console.log("after redecllared a = " +a); // 20
// this is the problem where a variable can be redeclared and updated with the use of  var

// ************************************************************************ //
// so in es6 we have let and const

let b = 30; // declared and initialized
console.log("b = " +b); // 30

// let b = 20; it does not allow to redecalre the same variable in the same scope
// console.log(b); // 20 // this will give an error

b = 20; // updated
console.log("after updated b = "+b); // 20 // this is allowed

// *********************************************************************** //

const c = 21; // declared and initialized
console.log("c = "+c); // 21
// const c = 22; // it does not allow to redecalre the same variable in the same scope
// console.log(c); // 22 // this will give an error

// so const does not aloow to redeclare and update the same variable in the same scope


// const d; // declared but not initialized
// console.log(d); // this will give an error


// It is also not allowed with const we have to initialize the variable at the time of declaration
// --------------------------------------------------------------------------------------------->

// some practical stuff with this concept

const accountId = 122234;
let accountEmail = "dhruv@google.com";
var accountPassword = "1234";
acountCity = "Delhi";

// for printing all this by single line means dont want to write multiple console.log statements

console.table([accountId, accountEmail, accountPassword, acountCity]);
// this will print all the values in a table format

accountEmail = "dhruvvvv@google.com";
accountPassword = "12345";
accountCity = "Bengaluru";

console.table([accountId, accountEmail, accountPassword, acountCity]);

/*
NOTE => prefer not to use var because of issue in block scope and functional scope

*/

