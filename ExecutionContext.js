// How does javaScript run the code
// JAVASCRIPT EXECUTION CONTEXT -------->
// {} Global Execution Context
//    => Global Execution Context (this)
//    => Function Execution Context
//    => Eval Execution Context

// Their are two phases of running the code
//   => 1. Memory Creation Phase
//    => 2. Code Execution Phase

let val1  = 10;
let val2 = 20;
function addNum(num1,num2){
    let total =  num1+num2;
    return total;
}
let result1 = addNum(val1,val2);
let result2 = addNum(10,20);

// So by this example
// Global Execution =>
//     this
// first in memory creation phase the code will be like this
// 1. val1 = undefined
// 2. val2 = undefined
// 3. addNum = defination of the function
// 4. result1 = undefined
// 5. result2 = undefined
//  second in code execution phase the code will be like this
// 1. val1 = 10
// 2. val2 = 20
// 3. addNum = again a execution context environment created
                 // new variable environment+execution thread
                //  1. Memory Creation Phase
                        //   => num1 = undefined
                        //   => num2 = undefined
                        //   => total = undefined

                // 2. Code Execution Phase
                        //   => num1 = 10
                        //   => num2 = 20
                        //   => total = 30
                        //   => return total = 30 this total return to the global execution line number 22
                        // After this line the addNum function will be removed from the memory
// 4 . result1 = 30
// 5. result2 = 30 by the same process as above


// CALL STACKS

// function one(){
//     console.log("one");
// }
// function two(){
//     console.log("two");
// }
// function three(){
//     console.log("three");
// } 

// one();
// two();
// three();

// so in call stack the code will be like this
// first one function will be called and it will be pushed to the call stack
// then two function will be called and it will be pushed to the call stack 
// then three function will be called and it will be pushed to the call stack
// as stack work on (LIFO) Last In First Out
// then each of them complete and get out

// lets make it complicated and see

function one(){
    console.log("one");
    two(); // it will call two function and push it to the call stack
}
function two(){
    console.log("two");
    three(); // it will call three function and push it to the call stack
}
function three(){
    console.log("three");
} 

one();


// so in the Stack

// first one function will be called and it will be pushed to the call stack
// then two function will be called and it will be pushed to the call stack but one remain inside it
// then three function will be called and it will be pushed to the call stack but two remain inside it
// as stack work on (LIFO) Last In First Out
// first three function will be completed and it will be removed from the call stack
// then two function will be completed and it will be removed from the call stack
// then one function will be completed and it will be removed from the call stack

// This is how call stack works in JavaScript
