const user  = {
    username : "thor",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log(`get user details from Api`);
        console.log(`UserName is : ${this.username}`);// if you don't use this here it will give you error because of the context because userName is not in its context it is present out of this function scope
        console.log(this); // this will print whole object of it's context
        
        // THe this works as 

//         In a regular function (not arrow function):

//            this refers to the object that called the function.

//         In an arrow function:

//             this is lexically bound, meaning it inherits this from the surrounding (outer) scope.


    },

}

user.getUserDetails()
console.log(this); // if you use this here it will give blank object but in browser it will give window obkect.


// CONSTRUCTOR Function 
// [new] keyWord is a constructor function
// const date  = new Date();  here new is a constructor function

// function userco(userName,loginCount,isLoggedin){
//     this.userName = userName;
//     this.loginCount = loginCount;
//     this.isLoggedin = isLoggedin

//     return this;
// }

// const userOne = userco("Hello",23,true);
// console.log(userOne);// here you get the output but is you pass another argument like the given example 
// const userTwo = userco("Namaste",2,false)
// console.log(userOne);// here you see that value will be overwrite for userOne and as a developer we don't want this
// // so for overcome from this problem we use constructor function

// const userOne = new userco("hello",23,true);
// const userTwo = new userco("namste",43,false);
// console.log(userOne);
// console.log(userTwo);


function userco(userName,loginCount,isLoggedin){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin

    this.greetings = function(){
        console.log(`welcomr ${this.userName}`);
        
    }
    return this;
}

const userOne = new userco("hello",23,true);
const userTwo = new userco("namste",43,false);
console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor); // this will give this as output [Function: userco]


