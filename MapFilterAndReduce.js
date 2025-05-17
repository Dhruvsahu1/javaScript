const coding = ["js", "python", "java", "c++", "c#", "php", "ruby", "swift", "kotlin", "scala", "typescript"];

coding.forEach((val)=>{
    // console.log(val); the output will be the value given in the array

})

const values = coding.forEach((val)=>{
    // console.log(val);
    //  if you return then also it not gives any thing 
})
// console.log(values); undefined because  forEach is designed for side effects (like console.log, modifying DOM, updating variables), not for creating new arrays.

// For this type of problems we have different more things in javascript


// => Filter method

const myNums = [1,2,3,4,5,6,7,8,9,10];
// const res = myNums.filter((val)=> val>4);
// console.log(res);// [5, 6, 7, 8, 9, 10] because we are filtering the values which are greater than 4

// but there is one catch if you written condition in block scope you had to apply return statement
// const res1 = myNums.filter((val)=>{val>4});
// console.log(res1);// [] because When you use curly braces {} in an arrow function, you need to explicitly use a return statement. Otherwise, it doesn’t return anything (i.e., returns undefined).
// for the correction just apply return satetment before the condition.
// Try it with yourself

// We van do the same by using forEach loop
const newNum = [];
myNums.forEach((val)=>{
    if(val>4){
        newNum.push(val);
    }
})
// console.log(newNum);// [5, 6, 7, 8, 9, 10] because we are applying logic the values which are greater than 4


// **************************************REAL WORLD EXAMPLE****************************************
const books = [
    { title: "The Timeless Quest", genre: "Fiction", publishedYear: 2005, editionYear: 2010 },
    { title: "History of Empires", genre: "History", publishedYear: 1998, editionYear: 2002 },
    { title: "Quantum Realities", genre: "Science", publishedYear: 2011, editionYear: 2014 },
    { title: "Memoirs of a Thinker", genre: "Non-Fiction", publishedYear: 2009, editionYear: 2013 },
    { title: "Chronicles of the Unknown", genre: "Fiction", publishedYear: 2017, editionYear: 2021 },
    { title: "The Human Experiment", genre: "Science", publishedYear: 2013, editionYear: 2017 },
    { title: "Age of Reason", genre: "Non-Fiction", publishedYear: 2001, editionYear: 2006 },
    { title: "Worlds Collide", genre: "Fiction", publishedYear: 2020, editionYear: 2022 },
    { title: "The Enlightened Path", genre: "Non-Fiction", publishedYear: 2010, editionYear: 2012 },
    { title: "Wonders of the Cosmos", genre: "Science", publishedYear: 2008, editionYear: 2011 },
    { title: "Voices of the Past", genre: "History", publishedYear: 2003, editionYear: 2005 },
    { title: "Rise and Fall", genre: "History", publishedYear: 2012, editionYear: 2018 },
    { title: "Fictional Realms", genre: "Fiction", publishedYear: 2015, editionYear: 2020 },
    { title: "Civilizations and Cultures", genre: "History", publishedYear: 2006, editionYear: 2009 },
    { title: "Scientific Revolutions", genre: "Science", publishedYear: 2016, editionYear: 2019 }
  ];

//   const filteredBooks = books.filter((book) => {
//     return book.genre === "Fiction";
//   })
//   console.log(filteredBooks);
// //   Multiple conditions 
// const filteredBooks1 = books.filter((book) => {
//     return book.genre === "Fiction" && book.publishedYear > 2010;
//   })
//   console.log(filteredBooks1);


// => Map method
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// const MapResult = myNums.map((val)=>{
//     return val*2;   
// })
// console.log(MapResult);// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] because we are multiplying the values by 2
// same here if you using block scope you have to apply return statement other wise you get lenght of array as undefined value each



// *********************************CHAINING OF MAP AND FILTER**********************************

// Chaining work as first it apply first method and then second method applies on the result of first method and this works continues until all the methods are applied.

// const newNum1 = myNums.map((val)=>{return val+10}).map((val)=>{return val*2}).filter((cal)=>{return cal%2===0});
// console.log(newNum1);// [
//     22, 24, 26, 28, 30,
//     32, 34, 36, 38, 40
//   ] because we are adding 10 to each value and then multiplying it by 2 and then filtering the values which are even


// => Reduce method

// const arr = [1,2,3,4,5,6];
// const initialValue = 0;
// const sumWithInitial = arr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, initialValue);
// console.log(sumWithInitial);// 21 because we are adding all the values of array and initial value is 0
//=> accumulator is the value that is returned from the previous iteration and currentValue is the value of the current iteration


// Example of reduce method

// const reduceREsult = myNums.reduce((accumulator, currentValue) => {
//     console.log(accumulator, currentValue);
    
//     return accumulator + currentValue;},0);
// console.log(reduceREsult);// 55 because we are adding all the values of array and initial value is 0

//  if we are not passing initial value then it will take the first value of array as initial value and then it will start the iteration.


// **********************************REAL WORLD EXAMPLE****************************************
const shoppingCart = [
    {itemName: "Laptop", price: 1000, quantity: 2},
    {itemName: "Mobile", price: 500, quantity: 1},  
    {itemName: "Tablet", price: 300, quantity: 3},
    {itemName: "Headphones", price: 200, quantity: 4},
    {itemName: "Mouse", price: 150, quantity: 1},
    {itemName: "Keyboard", price: 250, quantity: 2}
]

// const totalPriceToPAy = shoppingCart.reduce((acc,item)=>{
//     return acc+item.price;
// },0)
// console.log(totalPriceToPAy);// 2400 because we are adding the price  of each item and then adding it to the accumulator