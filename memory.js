// we have two types of memory in javascript
// 1. Stack memory (primitive data types) all primitive data types are stored in stack memory

// 2. Heap memory (non primitive data types) all non primitive data types are stored in heap memory

let myName = "Dhruv"; // string (primitive data type) stored in stack memory
let myAge = 22; // number (primitive data type) stored in stack memory

let MySecondName = myName; // string (primitive data type) stored in stack memory
console.log(MySecondName); // Output: Dhruv
console.log(myName); // Output: Dhruv

MySecondName = "Dhruvsh@";
console.log(MySecondName); // Output: Dhruvsh@
console.log(myName); // Output: Dhruv (because myName is not changed)
// here is the difference seen if we change the value of MySecondName then myName will not be changed because they are stored in stack memory and they are primitive data types
// so they are stored in stack memory and they are immutable

// let us use non primitive data types
 let userOne = {
    email:"user1@google.com",
    password:"12345",
 }

 let usertwo = userOne; // object (non primitive data type) stored in heap memory
 console.log(usertwo.email); // usertwo is pointing to the same object as userOne so it will give the same output as userOne
 console.log(userOne.email); // user1@google.com is the output in both the statements

 usertwo.email = "mera@google.com"; // changing the value of usertwo.email
 console.log(userOne.email);// so here we changes the value of usertwo.email and it will also change the value of userOne.email because they are pointing to the same object in heap memory
 console.log(usertwo.email);//Output will be mera@google.com
 
 

 



