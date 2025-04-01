// basic comparison checks

// console.log(2>1); // Output: true
// console.log(2<1); // Output: false
// console.log(2>=1); // Output: true
// console.log(2<=1); // Output: false
// console.log(2==1); // Output: false
// console.log(2!=1); // Output: true
// console.log(2===1); // Output: false
// console.log(2!==1); // Output: true



// comparison check with different data types
console.log(2==="2"); // Output: false
console.log(2=="2"); // Output: true    
console.log("2">1); // Output: true   => string to number conversion

console.log((+"")>=0); // Output: true => string to number conversion
console.log(0==false); // Output: true => boolean to number conversion  
console.log(0===false); // Output: false => boolean to number conversion

// important with null and undefined
console.log(null==undefined); // Output: true => null and undefined are equal in value but not in type
console.log(null===undefined); // Output: false => null and undefined are not equal in type

// the internal working of comparison and equality check are diffrent that's why we ger different output

console.log(null > 0); // Output: false => null is not greater than 0
console.log(null < 0); // Output: false => null is not less than 0
console.log(null >= 0); // Output: true => null is greater than or equal to 0
console.log(null <= 0); // Output: true => null is less than or equal to 0
console.log(null == 0); // Output: false => null is not equal to 0
console.log(null === 0); // Output: false => null is not equal to 0 in type and value

console.log(undefined > 0); // Output: false => undefined is not greater than 0
console.log(undefined < 0); // Output: false => undefined is not less than 0
console.log(undefined >= 0); // Output: false => undefined is not greater than or equal to 0
console.log(undefined <= 0); // Output: false => undefined is not less than or equal to 0
console.log(undefined == 0); // Output: false => undefined is not equal to 0
console.log(undefined === 0); // Output: false => undefined is not equal to 0 in type and value




