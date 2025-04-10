let a  =10;// Global scope
const b = 20;
// var c = 30;
// d  = 40;not recommended because it can update value from any where this may cause inconsistency in code

if (true) { // Block scope
    let a = 100;
    const b = 200;
    var c = 300;
    d = 400;
    console.log(a); // Output: 100
    console.log(b); // Output: 200
    console.log(c); // Output: 300
    console.log(d); // Output: 400
}

console.log(a); // Output: 10
console.log(b); // Output: 20   
console.log(c); // Output: 300
console.log(d); // Output: 400

function one(){
    const userName = "Tony";// It is a global scope variable for two() function and block scope for one() function
    function two(){
        const website = "Marvel.com";
        console.log(userName);
        
    }
    // console.log(website); // Output: ReferenceError: website is not defined
    two(); // Output: Tony
    
}
one(); // Output: Tony

if(true){
    const userName = "Tony";
    if(userName=="Tony"){
        const website = "Marvel.com";
        console.log(userName + website);
    }
    // console.log(website); //Output: ReferenceError: userName is not defined 
    
}
// console.log(userName00); // Output: ReferenceError: userName is not defined 

// ************************************* INTERESTING *************************************
//  hint of  hoisting


console.log(addOne(2)); // Output: 3
function addOne(num){
    return num+1;

}
console.log(addOne(2)); // Output: 3



// Hoisting with function expression
addTwo(2); // Output: TypeError: addTwo is not a function
const addTwo = function(num){
    return num+2;
}
console.log(addTwo(2)); // Output: 4

