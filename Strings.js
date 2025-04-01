const Name = "Dhruv ";
const repoCount = 50;

// console.log(Name + repoCount + " Value"); this is not the good way to concatenate in String instead of this we can use like this

console.log(`My name is ${Name} and my repo count is ${repoCount}`);


const gameName  = new String("hitesh-ec-value-good");

console.log(gameName[0]);
console.log(gameName.__proto__); // this will show empty string in console but it is not empty it is something which you see in console of inspect button

// most frequent used function in javaScript

console.log(gameName.length);//It gives the length of the String
let upperName = gameName.toUpperCase();
console.log(upperName);//It returns the String to capital letter
let lowerName = gameName.toLowerCase();
// we can write upper statement like this also 
console.log(gameName.toUpperCase());

console.log(lowerName);//It returns the String to lower case
console.log(gameName.charAt(2));//t it returns the character which is preesent at that character
console.log(gameName.indexOf("e"));// it return the index of that character presented as an argumentehich come first in a string
// there are one more function named as lastIndexof which give value from the last of the String.
console.log(gameName.lastIndexOf("e"));// it returns the last index of that character from the String;

const newString = gameName.substring(0,4);
console.log(newString);// (hite) the top 4 index value started from 0,1,2,3 index is accepted excluded the last value
const anotherString = gameName.slice(3,7);
console.log(anotherString); // (eshh) it work as same as substring but it work with negative indices also


const trimdemo = "    Dhruv     ";
console.log(trimdemo);
console.log(trimdemo.trim());// it will remove all the spaces from starting and ending as well 
// there are two more methods trimStart and trim end given in MDN docs

const url = "https://Dhruv.com/dhruv%20sahu";
console.log(url.replace("%20","-"));// It will replace %20 to - final result is "https://Dhruv.com/dhruv-sahu";

console.log(url.includes("Dhruv"));//It give true if String is present or false if String is not present

console.log(gameName.split("-")); // it gives an array as output ([ 'hitesh', 'ec', 'value', 'good' ]);



// this is the code comparison of String here comparison operator convert value in AScII code and then compare it
const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}

// here we get Stringwhen it is object or when it is of String

const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"  [(coerced) means automatic conversion of value from one type to another type]
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strPrim4 = new String("ram"); // String with new returns a string wrapper Object.
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"
console.log((typeof strPrim4)); // object

// for more reading and learning of String in JavaScript refer 
// [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String]





