console.log(Math); // it will give the object of Math and the type of this was object; 
// The output in console was Object [Math] {} this but when you run it on browsers console you get many more properties and functions

console.log(Math.abs(-10)); // it will give 10 as output and the type of this was number;
console.log(Math.abs(10)); // it will give 10 as output and the type of this was number;

console.log(Math.round(10.4)); // it will give 10 as output and the type of this was number;
console.log(Math.round(10.5)); // it will give 11 as output and the type of this was number;

console.log(Math.ceil(10.4)); // it will give 11 as output and the type of this was number;
console.log(Math.floor(10.4)); // it will give 10 as output and the type of this was number;

console.log(Math.min(10, 20, 30, 40)); // it will give 10 as output and the type of this was number;
console.log(Math.max(10, 20, 30, 40)); // it will give 40 as output and the type of this was number;

console.log(Math.pow(2, 3)); // it will give 8 as output and the type of this was number;
console.log(Math.sqrt(16)); // it will give 4 as output and the type of this was number;

console.log(Math.random()); // it will give a number between 0 to 1 for example [0.123456789] as output and the type of this was number;
// the output will be in the range of 0 to 1 and it will give the random number every time you run it

console.log(Math.random() * 10); // it will give a number between 0 to 10 for example [0.123456789] as output and the type of this was number;
// the output will be in the range of 0 to 10 and it will give the random number every time you run it
console.log((Math.random()*10)+1); // it will give a number between 1 to 11 for example [1.123456789] as output and the type of this was number;
// the output will be in the range of 1 to 11 and it will give the random number every time you run it);
console.log(Math.floor(Math.random()*10)+1); // it will give a number between 1 to 10 for example [1] as output and the type of this was number;
// the output will be in the range of 1 to 10 and it will give the random number every time you run it


const min = 10;
const max = 20;
const random = Math.floor(Math.random() * (max - min + 1)) + min; // it will give a number between 10 to 20 for example [10] as output and the type of this was number;
// the output will be in the range of 10 to 20 and it will give the random number every time you run it











