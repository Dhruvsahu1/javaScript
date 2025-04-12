const user = {
    userName: "IronMan",
    price : "999",

    welcomeMessage : function(){
        console.log(`Welcome to ${this.userName} card.`);
        console.log(this); //this will give the object itself as otput of the current context
        // In non-strict mode: `this` is the global object (window in browsers)
        // In strict mode: `this` is undefined
    }
}
user.welcomeMessage(); // Welcome to IronMan card. 
// the log of  "THIS" output is {
//   userName: 'IronMan',
//   price: '999',
//   welcomeMessage: [Function: welcomeMessage]
// }
user.userName = "Thor";
user.welcomeMessage(); // Welcome to Thor card.
// the log of  "THIS" output is {
//     userName: 'Thor',
//     price: '999',
//     welcomeMessage: [Function: welcomeMessage]
//   }
console.log(this);// It will give {} as output in node environment and in browser it will give the window object as output

// IMPORTANT


// function hello(){
//     console.log(this);// this will give several things in console
// }
// function hello(){
//     let userName = "Iron"
//     console.log(this.userName);// this will give undefined as output here
// }
// ANOTHER TYPE
// const hello = function(){
//     let userName = "Iron"
//     console.log(this.userName);// this will give undefined as output here
// }
const hello = ()=>{
    let userName = "Iron"
    console.log(this.userName);// this will give undefined as output here
}
hello();
//  Same output hence this is not referring in function
// const obj = {
//     name: "Alice",
//     greet: function () {
//       console.log(this.name);
//     },
//   };
  
//   obj.greet(); // "Alice" — because `this` refers to `obj`
  
// const obj = {
//     name: "Bob",
//     greet: () => {
//       console.log(this.name);
//     },
//   };
  
//   obj.greet(); // undefined — because `this` refers to the outer scope, not `obj`
// Regular functions have their own this context, set dynamically at call time.


// Arrow functions behave very differently — they do not have their own this.
// Instead, they inherit this from their surrounding lexical scope (i.e., the enclosing function or block).

// const obj = {
//     name: "Bob",
//     greet: () => {
//       console.log(this.name);
//     },
//   };
  
//   obj.greet(); // undefined — because `this` refers to the outer scope, not `obj`
  
// const obj = {
//     name: "Charlie",
//     greet: function () {
//       const arrowFn = () => {
//         console.log(this.name);
//       };
//       arrowFn();
//     },
//   };
  
//   obj.greet(); // "Charlie" — arrow function gets `this` from `greet` method
  
// ✅ Arrow functions capture this from the surrounding context
// ❌ They do not bind their own this, making them unsuitable for object methods


// Regular Function	 ✅ Yes	Call site (dynamic)
// Arrow Function	 ❌ No	Lexical scope (static)

// ARRROW FUNCTIONS

// const addTwo = (num1,num2) => { //  Explicit return statement
//     return num1+num2;
// }

// IMPLICIT RETURN STATEMENT


// const addTwo = (num1,num2) => num1+num2; // this is the short form of the above function

// const addTwo = (num1,num2) => (num1+num2); // this is the short form of the above function
console.log(addTwo(2,3)); // it will give 5 as output and the type of this was number;
