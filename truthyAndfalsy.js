// When we assume that the present value is true it is considered as truthy  value
// When we assume that the present value is false it is considered as falsy  value



const userEmail = "Dhruv@dhruv.com"
if(userEmail){
    console.log("Email is present");
}else{
    console.log("Email is not present");
}

//  FALSY VALUES
// false , 0, "", -0 , BigInt 0n,null undefined, NaN

// TRUTHY VALUES
// remaining values are truthy values
// "0", "false", [], {}, function(){}, -1, true, 123n


// checkinhg of emptyArray And emptyObject

const arr = [];
if(arr.length === 0){
    console.log("Array is empty");
}

const obj = {};
if(Object.keys(obj).length===0){  // Object.keys(obj) will return an array of keys of the object
    console.log("Object is empty");
}


// // Need to know this difference also
// console.log(false == 0); false == ""  , 0 == '' // true
// console.log(false === 0); // false
