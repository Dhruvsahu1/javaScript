let score = 33;

console.log(typeof score); // number
console.log(typeof (score)); // number

// let scoreString = "33"; 

// console.log(typeof scoreString); // string
// console.log(typeof (scoreString)); // string


// let valueinNumber = Number(scoreString); // converting string to number using Number() function
// console.log(typeof valueinNumber); // number

// *******************************************************************************************

// let scoreString = "33abc"; 

// console.log(typeof scoreString); // string
// console.log(typeof (scoreString)); // string


// let valueinNumber = Number(scoreString); // converting string to number using Number() function
// console.log(typeof valueinNumber); // number
// console.log(valueinNumber); // NaN (Not a Number) because the string cannot be converted to a number


// *******************************************************************************************

// let scoreString = null; 

// console.log(typeof scoreString); // string
// console.log(typeof (scoreString)); // string


// let valueinNumber = Number(scoreString); // converting string to number using Number() function
// console.log(typeof valueinNumber); // number
// console.log(valueinNumber); // 0 (because null is converted to 0 when using Number() function)

// *******************************************************************************************

// let scoreString = undefined; 

// console.log(typeof scoreString); // string
// console.log(typeof (scoreString)); // string


// let valueinNumber = Number(scoreString); // converting string to number using Number() function
// console.log(typeof valueinNumber); // number
// console.log(valueinNumber); // NaN (Not a Number) because undefined cannot be converted to a number

// *******************************************************************************************

// let scoreString = true; 

// console.log(typeof scoreString); // string
// console.log(typeof (scoreString)); // string


// let valueinNumber = Number(scoreString); // converting string to number using Number() function
// console.log(typeof valueinNumber); // number
// console.log(valueinNumber); // 1 (because true is converted to 1 when using Number() function)

// same for false their we get output of 0

// NOTE => and for string we get NaN if string is not in number format and for null we get 0 and for undefined we get NaN.

//*******************************************************************************************

// in precise => 
    //  "33" => 33 (string to number)
    //  "33abc" => NaN (string to number)
    //  null => 0 (null to number)  
    //  undefined => NaN (undefined to number)
    //  true => 1 (boolean to number)
    //  false => 0 (boolean to number)
    //  NaN => NaN (not a number to number)
    //  Infinity => Infinity (infinity to number)

// *******************************************************************************************

// let isLoggedIn = 1;

// let boleanisLogedIn  = Boolean(isLoggedIn); // converting number to boolean using Boolean() function
// console.log(typeof boleanisLogedIn); // boolean 
// console.log(boleanisLogedIn); // true (because 1 is converted to true when using Boolean() function)

//*******************************************************************************************

// let isLoggedIn = "";

// let boleanisLogedIn  = Boolean(isLoggedIn); // converting number to boolean using Boolean() function
// console.log(typeof boleanisLogedIn); // boolean 
// console.log(boleanisLogedIn); // false (because "" is converted to false when using Boolean() function)

//*******************************************************************************************

// let isLoggedIn = "Dhruv";

// let boleanisLogedIn  = Boolean(isLoggedIn); // converting number to boolean using Boolean() function
// console.log(typeof boleanisLogedIn); // boolean 
// console.log(boleanisLogedIn); // true (because "Dhruv" is converted to true when using Boolean() function)


//*******************************************************************************************

let someNumbr  =55; // number
let StringNumber = String(someNumbr); // converting number to string using String() function
console.log(typeof StringNumber); // string 
console.log(StringNumber); // "55" (because 55 is converted to "55" when using String() function)