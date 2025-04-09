// Their are two types of declaration of object in javaScript

// 2 => Object Constructor
// Singelton 
// we will create object by constructor method and inside it singelton is made
// Object.create

// 2 => Object Literal
const jsUser = {
    name : "IronMan", // Treated as ["name": "email"] internally
    "full name" : "Tony Stark",
    age: 45,
    location : "Jaipur",
    email : "IronMan@Marvel.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday", "Wednesday"],
};

// for accesing the object we can use dot notation and bracket notation
// console.log(jsUser.email);// "IronMan@Marvel.com"
// console.log(jsUser[email]); it eill give the reference Error because email is not defined because it is not a variable it is a key of the object and it is treated as a string internally 
// So the correct way is 
// console.log(jsUser["email"]);// "IronMan@Marvel.com"
jsUser.email = "tonyStark@marvel.com"; // updating the value of email key
// Object.freeze(jsUser); // it will freeze the object and we can't change the value of the object after this

jsUser.greeting = function(){
    console.log("hello js User");
   

}

console.log(jsUser.greeting);// [Function (anonymous)] it will give the function as output and the type of this was function;
console.log(jsUser.greeting()); // hello js User , undefined it will give the output of the function and the type of this was undefined;
// Undefined is given because we are not returning anything from the function

jsUser.greeting2 = function(){
    console.log(`Hello js user ${this.name}`);
}
console.log(jsUser.greeting2()); // Hello js user IronMan Undefined  is  the output 


// NOTE
// 1. Object properties can be accessed using dot notation or bracket notation.
// 2. Bracket notation is useful when the property name is dynamic or not a valid identifier (e.g., contains spaces or special characters).
// Example 
// console.log(jsUser["full name"]); // "Tony Stark"
// console.log(jsUser.full name); // it will give the reference error because it is not a valid identifier
// That's why we use bracket notation for this purpose

// INTERVIEW QUESTION 
// const mySym = Symbol("key1");

// // const jsUser = {
// //     name : "IronMan", // Treated as ["name": "email"] internally
// //     "full name" : "Tony Stark",
// //     mySym : "key1",
// //     age: 45,
// //     location : "Jaipur",
// //     email : "IronMan@Marvel.com",
// //     isLoggedIn : false,
// //     lastLoginDays : ["Monday", "Tuesday", "Wednesday"],
// // };

// // console.log(jsUser.mySym); // it will give the value of mySym key which is "key1"
// // but the Problem was we have to save a value of symbol datatype and print it but here it is of  String data type
// // for achieving this 
// const jsUser = {
//     name : "IronMan", // Treated as ["name": "email"] internally
//     "full name" : "Tony Stark",
//     [mySym]: "Mykey1",
//     age: 45,
//     location : "Jaipur",
//     email : "IronMan@Marvel.com",
//     isLoggedIn : false,
//     lastLoginDays : ["Monday", "Tuesday", "Wednesday"],
// };
// console.log(jsUser[mySym]);//Mykey1 is printed here we don't have any option we have to use bracket notation for this purpose
// // If we have to print all the keys of this object the symbol is not come 
// console.log(Object.keys(jsUser));
// console.log(Object.values(jsUser)); // it will give the value of all the keys in the object and the type of this was object;
// console.log(Object.entries(jsUser)); // it will give the key and value of all the keys in the object and the type of this was object;
// console.log(jsUser.hasOwnProperty("name")); // it will give true as output and the type of this was boolean;


 
// // ["name", "full name", "age", "location", "email", "isLoggedIn", "lastLoginDays"]
// // for achieving this we use 
// console.log(Object.getOwnPropertySymbols(jsUser)); 
// // [ Symbol(key1) ]


// MORE ON OBJECTS

// const tinderUser = new Object();// This is a singleton object   
// console.log(tinderUser); // it will give the object in the format of {} as output and the type of this was object;
const tinderUser = {

} // this is a object literal hence their is no difference between these two 
tinderUser.id = "12ABS";
tinderUser.name = "Tony";
tinderUser.isLoggedIn = false;

console.log(tinderUser); // it will give the object in the format of { id: '12ABS', name: 'Tony', isLoggedIn: false } as output and the type of this was object;



// Nested object creation and accessing the value of the object
const regularUser = {
    email : "Ironman@marvelll.com",
    fullName :{
        userFullName :{
            firstName : "Tony",
            lastName : "Stark",
        }
    }
}
console.log(regularUser.fullName.userFullName.firstName); // it will give Tony as output and the type of this was string;
console.log(regularUser.fullName.userFullName.lastName); // it will give Stark as output and the type of this was string;

// Merging of two or more  object with a single object

const obj1 = {1:"a",2:"b",3:"c"};
const obj2 = {4:"d",5:"e",6:"f"};

// const obj3 = {obj1,obj2};
// console.log(obj3);// { obj1: { '1': 'a', '2': 'b', '3': 'c' }, obj2: { '4': 'd', '5': 'e', '6': 'f' } }
// here is the problem this obj3 is not merged it is just a nested object
// for merging we have to use Object.assign method

const obj3 = Object.assign({},obj1,obj2); // it will merge the two objects and the type of this was object;
console.log(obj3); // it will give the object in the format of { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' } as output and the type of this was object;
// We can acieve this by using spread operator also
const obj4 = {...obj1,...obj2}; // it will merge the two objects and the type of this was object;
console.log(obj4); // it will give the object in the format of { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' } as output and the type of this was object;    


// Syntax of object from database 
const users = [
    {
        id:"124",
        name: "harshhhhh",
    },
    {
        id:"124",
        name: "harshhhhh",
    },
    {
        id:"124",
        name: "harshhhhh",
    }
]
console.log(users[1].name);
 // it will give the name of the second user and the type of this was string;

//  OBJECT DESTRUCTURING 

const course = {
    courseName : "JavaScript",
    price : "199",
    courseDuration : "5 days",
    courseInstructor : "Thor",

}
// we can get by course.courseName and course.price but we can use destructuring for this purpose

const {courseName, price} = course; // it will give the value of courseName and price and the type of this was string;
console.log(courseName); // it will give JavaScript as output and the type of this was string;
console.log(price); // it will give 199 as output and the type of this was string;
const {courseDuration : cd, courseInstructor : ci} = course; // it will give the value of courseDuration and courseInstructor and the type of this was string;
console.log(cd); // it will give 5 days as output and the type of this was string;
console.log(ci); // it will give Thor as output and the type of this was string;


// This is the basic of Object in javaScript 
// for more understanding refer this 
// [LINK : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object]
