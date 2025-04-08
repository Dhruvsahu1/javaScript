const score  = 400;
console.log(score); // it will give 400 as output ND THE TYPE OF THIS WAS NUMBER 

// but we want to be sure that the value is number.

const balance = new Number(10000); // this is the object of number and it will give the type of object
console.log(balance); // it will give 10000 as output and the type of this was object [Number:400];

console.log(balance.toString()); // it will give 10000 as output and the type of this was string;
// but there is no change in original one the original one will remain same
console.log(balance.toFixed(2)); // it will give 10000.00 as output and the type of this was string;



const otherNumber = 123.5456;
console.log(otherNumber.toPrecision(3)); // it will give 124 as output and the type of this was string;
//the output would be depend on the counting of the total number from starting to the digit mention and gives the round value of that number
// and the type of this was string;
console.log(otherNumber.toPrecision(2)); // it will give 1.2e+2 as output and the type of this was string;
// The "e" notation is a shorthand for "*10", so (1.2e+2) means (1.2times 10^{2}).



const hundreds = 10000000000000;
console.log(hundreds.toLocaleString());// it will give 10,000,000,000,000 as output and the type of this was string;
// the first one is the default one and it will give the output in the default format of the number which is US based
console.log(hundreds.toLocaleString("en-IN")); // it will give 1,00,00,00,000,000 as output and the type of this was string;
// the second one is the Indian format of the number and it will give the output in the Indian format of the number

console.log(Number.MAX_VALUE); // it will give 1.7976931348623157e+308 as output and the type of this was number;
console.log(Number.MIN_VALUE); // it will give 5e-324 as output and the type of this was number;
console.log(Number.MAX_SAFE_INTEGER); // it will give 9007199254740991 as output and the type of this was number;
console.log(Number.MIN_SAFE_INTEGER); // it will give -9007199254740991 as output and the type of this was number;







