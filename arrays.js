const myArr = [0,1,2,3,4,5,true,"jitesh"];
console.log(myArr); // it will give the array in the format of [0,1,2,3,4,5,true,"jitesh"] as output and the type of this was object;
console.log(typeof myArr);  // it will give the type of this was object;

// The Array object as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name and has member for performing common array operations.

// JAVASCRIPT arrays are resizable and can contain a mix of different data types.
// JAVASCRIPT arrays are zero indexed, meaning the first element is at index 0, the second element is at index 1, and so on.
// JAVASCRIPT arrays are mutable, meaning you can change the contents of an array after it has been created. (you can add or remove elements from an array)
//JAVASCRIPT array copy operations are shallow, meaning that if you copy an array, the new array will reference the same objects as the original array. (if you change the original array, the copied array will also change)
// JAVASCIPT arrays are not associative arrays, meaning that you cannot use strings as indexes. (you can only use numbers as indexes)

const myHeroes = ["Ironman", "Thor", "Hulk", "Spiderman", "Captain America"];
const myArr2 = new Array(1,2,3,4,5);
console.log(myArr2[3]); // it will give 4 as output and the type of this was number;

// ARRAYS METHODS
myArr.push(6); // it will add 6 at the end of the array and the type of this was number;
console.log(myArr); // it will give the array in the format of [0,1,2,3,4,5,true,"jitesh",6] as output and the type of this was object;
myArr.pop(); // it will remove the last element of the array and the type of this was number;
console.log(myArr); // it will give the array in the format of [0,1,2,3,4,5,true,"jitesh"] as output and the type of this was object;
myArr.unshift(7); // it will add 7 at the beginning of the array and the type of this was number;
console.log(myArr); // it will give the array in the format of [7,0,1,2,3,4,5,true,"jitesh"] as output and the type of this was object;
myArr.shift(); // it will remove the first element of the array and the type of this was number;
console.log(myArr); // it will give the array in the format of [0,1,2,3,4,5,true,"jitesh"] as output and the type of this was object;
console.log(myArr.length); // it will give the length of the array and the type of this was number;
console.log(myArr.includes(9)); // it will give true as output and the type of this was boolean;
// And give false if the passed value is not found in the array.
console.log(myArr.indexOf(2)); // it will give 2 as output and the type of this was number;
const newArr = myArr.join(); 
console.log(newArr); // it will give the array in the format of "0,1,2,3,4,5,true,jitesh" as output and the type of this was string;

// IMPORTANT 
// difference between slice and splice
// slice will not change the original array but splice will change the original array
// the last element passed in argument of slice is not included in the output but the last element passed in argument of splice is included in the output
console.log("A => ", myArr );

const slicedArr = myArr.slice(2,5)
console.log("B => " , slicedArr ); // it will give the array in the format of [2,3,4] as output and the type of this was object;
console.log("A => ", myArr ); // it will give the array in the format of [0,1,2,3,4,5,true,"jitesh"] as output and the type of this was object;

const splicedArr = myArr.splice(2,5)
console.log("C => " , splicedArr ); // it will give the array in the format of [2,3,4,5,true,"jitesh"] as output and the type of this was object;
console.log("A => ", myArr ); // it will give the array in the format of [0,1] as output and the type of this was object;

// More Important Array Topics

const marvel_Heroes = ["Ironman", "Thor", "Hulk", "Spiderman", "Captain America"];
const dc_Heroes = ["SuperMan","Flash","Batman"];
// marvel_Heroes.push(dc_Heroes); // it will add the dc_Heroes array at the end of the marvel_Heroes array and the type of this was object;
console.log(marvel_Heroes); // it will give the array in the format of [ 'Ironman', 'Thor', 'Hulk', 'Spiderman', 'Captain America', [ 'SuperMan', 'Flash', 'Batman' ] ] as output and the type of this was object;
// console.log(marvel_Heroes[5][1]); // it will give Flash as output and the type of this was string;
// Not a good Practice for getting elements Or for adding array inside an array
// So, we can use concat method for this purpose
const allHeroes = marvel_Heroes.concat(dc_Heroes); // it will add the dc_Heroes array at the end of the marvel_Heroes array and the type of this was object;
console.log(allHeroes); // it will give the array in the format of [ 'Ironman', 'Thor', 'Hulk', 'Spiderman', 'Captain America' ] as output and the type of this was object;

// There are more ways to add array inside an array like spread operator and destructuring
// Spread Operator
const allHeroes2 = [...marvel_Heroes, ...dc_Heroes]; // it will add the dc_Heroes array at the end of the marvel_Heroes array and the type of this was object;
console.log(allHeroes2); // it will give the array in the format of [ 'Ironman', 'Thor', 'Hulk', 'Spiderman', 'Captain America' ] as output and the type of this was object;
// Destructuring
const allHeroes3 = [marvel_Heroes, dc_Heroes]; // it will add the dc_Heroes array at the end of the marvel_Heroes array and the type of this was object;    
console.log(allHeroes3); // it will give the array in the format of [[ 'Ironman', 'Thor', 'Hulk', 'Spiderman', 'Captain America' ],[SuperMan,Flash,Batman]] as output and the type of this was object;


const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const flatArr = anotherArr.flat(Infinity); // it will flatten the array and the type of this was object;
console.log(flatArr); // it will give the array in the format of [ 1, 2, 3, 4, 5, 6, 7, 6, 7,  4, 5  ] as output and the type of this was object;
// flat method takes an argument which is the depth of the array to be flattened and the default value is 1
// if you want to flatten the array to a specific depth, you can pass the depth as an argument to the flat method ,Otherwise you can pass Infinity as an argument to the flat method to flatten the array to ts maximum depth
// for example, if you want to flatten the array to a depth of 2, you can pass 2 as an argument to the flat method


console.log(Array.isArray(myArr)); // it will give true as output and the type of this was boolean;
console.log(Array.isArray("Dhruv")); // it will give false as output and the type of this was boolean;
console.log(Array.from("Dhruv")); // it will give the array in the format of [ 'D', 'h', 'r', 'u', 'v' ] as output and the type of this was object;

// From method is used to create a new array from an array-like or iterable object. It takes an array-like or iterable object as an argument and returns a new array containing the elements of the array-like or iterable object.
console.log(Array.from(marvel_Heroes));// // it will give the array in the format of [ 'Ironman', 'Thor', 'Hulk', 'Spiderman', 'Captain America' ] as output and the type of this was object AS IT creates a new array from the existing array and the type of this was object; so i have shallow copy
// EXAMPLE 
const newhero = Array.from(marvel_Heroes);
console.log("newHero is ", newhero); // it will give the array in the format of [ 'Ironman', 'Thor', 'Hulk', 'Spiderman', 'Captain America' ] as output and the type of this was object;
console.log(newhero === marvel_Heroes); // it will give false as output and the type of this was boolean;
// It gives false because it creates a new array from the existing array and the type of this was object; so i have shallow copy
// INTRESTING tHING ABOUT FROM
console.log(Array.from({name: "Dhruv"}));//It will give the blank array as output you have to pass the iterable object to get the output in the array format


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // it will give the array in the format of [ 100, 200, 300 ] as output and the type of this was object;
// Array.of method creates a new array instance with a variable number of arguments, regardless of the number or type of the arguments. It takes a variable number of arguments and returns a new array containing the arguments as elements.




//  for remaining methods of array you can check the MDN docs
//[LINK => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array]