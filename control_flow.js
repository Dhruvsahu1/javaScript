// Conditionals 

// => If

// if(true){
//     console.log("It's always run");
    
// }
// const isUserLoggedIn = true;
// if(isUserLoggedIn){
//     console.log("User is Logged In");
// }

// General  Comparison Operator which are used to compare values 
// 3!= 2, // true
// <  ,  > , <= , >= , == , !=, ===,!==
// if(2 == "2"){
//     console.log("executed");   executed
// }
// if(2 === "2"){
//     console.log("executed"); never got executed 
// }


// => if else block
// const temp = 41;
// if(temp < 50){
//     console.log("i am in if statement");
// }else{
//     console.log("i am in else statement");
// }


// SCOPE RELATED STUFF
//  const a = 100;
//  if(a>50){
//     const b = 300; // if we declare it with var keyword then this will not  show error on line 41 because var has global scope
//     console.log(b);
    
//  }
//  console.log(b); // this will give an error because b is not defined outside the if block   


// SHORT HAND NOTATION For writing if statements
// if(true) console.log("true"),console.log("Again true"); // NOT RECOMMENDED

// for multiple statements we use if else if block
// => if else if block

// const balance = 1000;
// if(balance > 300){
//     console.log("Balance is greater than 300");
// }else if(balance > 400){
//     console.log("Balance is greater than 400");
// }else if(balance > 500){
//     console.log("Balance is greater than 500");
// }else{
//     console.log("Balance is less than 100");
// }

// use of logical operators
// const isUserLoggedIn = true;
// const haveDebitCard = true;
// const googleLogin = true;

// if(isUserLoggedIn && haveDebitCard && googleLogin){
//     console.log("User is logged in and have debit card ");
// }
 
// if(isUserLoggedIn || googleLogin){
//     console.log("User is logged in ");
// }

// use of switch case
// const month = 3;
// switch(month){
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("June");
//         break;
//     default:
//         console.log("Invalid month");
// } make sure to put break statement after each case otherwise it will go to next case and run all the logic except default case


// =>Nullish Coalescing Operator (??):



// this operator is used to check if the value is null or undefined
// let value = 5?? 10;
// console.log(value); // 5
// value = null ?? 10;
// console.log(value); // 10
// value = undefined ?? 10;
// console.log(value); // 10
// value = 0 ?? 10;
// console.log(value); // 0
// value = null ?? 10 ?? 20;
// console.log(value); // 10

// USE of nullish coalescing operator
// whenyou are taking any response from the DB or ApI and you get chance of two values either null or undefined then you can use this operator to check if the value is null or undefined


//=>    Ternary Operator
//  condition ? true : false    
// const price = 10;
// price <= 30? console.log(true) : console.log(false); 




