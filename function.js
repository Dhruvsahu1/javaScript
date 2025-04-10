function helllo(){
    console.log("Hello World");
}
helllo(); // it will give Hello World as output and the type of this was undefined;
// hello => it is a reference to the function and it is not a variable so we can't use it as a variable
console.log(helllo);// It gives this as output [Function: helllo]
// hello() => the execution of the function.

function addTwoNumber(num1,num2){ // num1 and num2 are the parameters of the function
    console.log(num1+num2); 
    
}
const res = addTwoNumber(2,3); 
console.log(res); // it will give undefined as output and the type of this was undefined;
// because we are not returning anything from the function and it is just printing the value


addTwoNumber(2,3); // 2 and 3 are the arguments of the function.
// it will give 5 as output and the type of this was undefined;


// If we dont pass any argument the output is NAN here
addTwoNumber(); // it will give NaN as output and the type of this was number;

// If we put the different data types of arguments
addTwoNumber(2,"3"); // it will give 23 as output and the type of this was number;
// It will concatenate the string and number and give the output in the string format
// so we have to be careful while passing the arguments to the function

addTwoNumber(3,null); // it will give 3 as output and the type of this was number;
// It will treat null as 0 and give the output in the number format

// Another function example 
function addTwoNumber2(num1,num2){ // num1 and num2 are the parameters of the function
    return num1+num2; 
    console.log(Hello); // this line will not execute because the return statement will exit the function
    
}
addTwoNumber2(2,3); // 2 and 3 are the arguments of the function.
// But for this type of use we have to store the value in a variable to get the output
// bexause it is returning the value and not printing it
const ans = addTwoNumber2(2,3); 
console.log(ans); // it will give 5 as output and the type of this was number;

// EXAMPLES
function loggedInUser(userName = "Marvel"){
    return `${userName} is just logged in!`
}
// let user = loggedInUser("IronMan");
// console.log(user); // it will give IronMan is just logged in! as output and the type of this was string;


// let user  = loggedInUser();
// console.log(user); // it will give undefined as output and the type of this was undefined;
// because we are not passing any argument to the function and it is returning undefined

// for solving this issue we have to put the default value of the parameter


// IMPORTANT QUESTION
// PROBLEM => let we have a user cart and we don't know how many parameters user enters to add
// SOLUTION => we can use rest operator for this purpose

function addCartPrices(...valN){
    return valN;
}
console.log(addCartPrices(200,300,400,500,600,767));// The output should be in array form [ 200, 300, 400, 500, 600, 767 ];

// OBJECTS in function

const user ={
    userName: "IronMan",
    price : 3999
}
function handleObject(anyObj){
    return `The price of ${anyObj.userName} card is ${anyObj.price}.`
}


console.log(handleObject(user)); // The IronMan card is of  3999 price is the output
console.log(handleObject({userName: "Thor", price: 2999})); // The Thor card is of  2999 price is the output
// we can pass the object directly to the function and it will give the output in the same format as above


// ARRAY in a function
const userArr = ["IronMan", "Thor", "Hulk"];
function handleArray(arr){
    return arr;
}
console.log(handleArray(userArr)); // The output should be in array form [ 'IronMan', 'Thor', 'Hulk' ];
// This will work as same as the object and we can pass the array directly to the function and it will give the output in the same format as above
console.log(handleArray(["IronMan", "Thor", "Hulk"])); // The output should be in array form [ 'IronMan', 'Thor', 'Hulk' ];