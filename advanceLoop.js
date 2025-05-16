// There are many variants of loops in javaScript 
// => forOf loop

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5];

// for(const iterator of arr){
//     console.log(iterator);
// }

// const greetings = "Hello world!";
// for(const greet of greetings){
//     if(greet == " "){
//         continue;
//     }
//     console.log(`Each character is ${greet}`);
// }

// More use of for of loops
// Map
const map = new Map();
map.set("In","INDIA");
map.set("Fr","FRANCE");
map.set("USA","United States of America");

// // console.log(map);  this will give the whole map as object 
// for(const key of map){
//     console.log(key); // this will give the key of the map but in form of array all elements print in separate array
    
// }
// one more way to print the same
// for(const [key,value] of map){ //  here we get value in key and value form we are destructuring here ex Key is In and value is INDIA
//     console.log(`Key is ${key} and value is ${value}`);
// }

//  if you will use for in loop which was discussed later then you get nothing in console 
// for(const key in map){
//     console.log(`Key is ${key} and value is ${map[key]}`); 
    
// }
// WHY?
// 1. Map is not a plain JavaScript object.
// for...in is designed to enumerate properties of plain objects, not instances of Map.
// Map stores entries in a different internal format and does not expose its keys as enumerable properties.

// map[key] is undefined because map["In"] is not how Map stores or accesses values.

// Object

const myObject = {
    'game1' : "Cricket",
    'game2' : "Football",
}

// for(const [key, value] of myObject){
//     console.log(`Key is ${key} and value is ${value}`); in this line  we get error because we are trying to destructure the object but we need to use Object.entries() method to convert the object into array of arrays and it say myObject is not iterable
    
// }


const newObj = {
    py: "python",
    js : "javaScript",
    cpp : "c++",
    java : "java",
    rb: "ruby"

}

//  we can use for in loop in object to print the value

// => for in loop

// for(const key in newObj){
    
//     console.log(`Key is ${key} and value is ${newObj[key]}`); // here we are using key to get the value of the object
// }

const a = ["java","rb","py","js","cpp"];
// for(const key in a){
//     console.log(`Key is ${key} and value is ${a[key]}`); // here we are using key to get the value of the object
// }
//  here you will know that the indesx of the array is the key and value is the elements of the array

// ************************************************************************************************************
// IMPORTANT AND MOST USED LOOP 
// => forEach loop
// forEach loop is used to iterate over the array and perform an operation on each element of the array


const coding = ["java","rb","py","js","cpp"];

// coding.forEach(function(val){
//     console.log(`The value is ${val}`);
// })

// Another variant of using the forEach loop is 
// coding.forEach((val)=>{
//     console.log(`The item is ${val}`);
    
// })

//  you can pass function also in forEach loop

// function prints(item){
//     console.log(`The item is ${item}`);
    
// }
// coding.forEach(prints)
// coding.forEach(prints);  Make sure you passed the function name only not the function call other wise you get an error

//  there was more parameters use in call back function in foreach
// coding.forEach((val,index,array)=>{
//     console.log(val,index,array);
    
// })

// ************`************************************************************************************************************

// REAL WORLD USE CASE
//  when you can get data from database or some api's 


const users = [
    {
        userName: "Adam",
        userEmail : "Adam@gmail.com"
    },
    {
        userName: "Alice",
        userEmail : "Alice@gmail.com"
    }, {
        userName: "Andrew",
        userEmail : "Andrew@gmail.com"
    },
]

users.forEach((user)=>{
    console.log(`user Name is ${user.userName}`);
    console.log(`user email is ${user.userEmail}`);
})