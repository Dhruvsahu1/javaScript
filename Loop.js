// Loops can hlp to iterate over a collection of items and perform an operation on each item.

// For loop

// for(let i = 0;i<10;i++){
//     console.log(`the value of i is ${i}`);
// }
//  the variable you define in the for loop is only accessible inside the for loop because it is a block-scoped variable.


// we can write nestd for loop 
// for(let i = 0;i<5;i++){
//     for(let j = 0;j<5;j++){
//         console.log(`the value of i is ${i} and the value of j is ${j}`);
//     }
// }

// perform an operation on each item in an array
// const arr = [1,2,3,4,5];
// for(let i = 0;i<arr.length;++i){
//     console.log(`the value of arr[${i}] is ${arr[i]}`);
// }

// Their was two important keyword that plays an important role in iterations
// 1. break
// 2. continue

// break is used to break the loop and continue is used to skip the current iteration and move to the next iteration

// => break
// for(let i = 0;i<5;i++){
//     if(i==5){
//         console.log(`the value ${i} is detected`);
//         break;
//     }
//     console.log(`the value of i is ${i}`);
    
// }

//=> Continue
// for(let i = 0;i<5;i++){
//     if(i==2){
//         console.log(`the value ${i} is detected`);
//         continue;
//     }
//     console.log(`the value of i is ${i}`);

// }


// => while loop


// The while loop is used when we don't know the number of iterations beforehand. It is also useful when we don't know the exact number of iterations required.

// Example of while loop and Syntax.
// let i = 0;
// while(i<10){
//     console.log(`the value of i is ${i}`);
//     i++;
// }

// Usse of while loop to perform an operation on each item in an array
// let arr= ["IronMan", "Thor", "Hulk", "Captain America"];
// let j = 0;
// while(j<arr.length){
//     console.log(`the value of arr[${j}] is ${arr[j]}`);
//     j++;
// }

// => do while loop

// The do while loop is similar to the while loop, but it executes the code block at least once.

// Example of do while loop and Syntax.

// let score = 0;
// do{
//     console.log(`the value of score is ${score}`);
//     score++;
// }while(score<10);

//  it's work similar like other loops but the only difference is that it will execute the code block at least once even if the condition is false. 
// example if we put score value is 11 then output must be the value of score is 11.
// Make Sure you try this example also




