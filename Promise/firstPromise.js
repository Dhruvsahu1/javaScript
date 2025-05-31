// Promise => A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// pending:- initial state, neither fulfilled nor rejected.
// fulfilled:- meaning that the operation was completed successfully.
// rejected:- meaning that the operation failed.


// Promise Basic
// fetch('https://something.com').then().catch().finally()
// this is the basic structure for promises 
// then will execute when the resolved state 
// and catch will execute when the  reject state
// finally is execute at the end  when neither [then] run or [catch] or may they both not execute


// HOW TO CREATE A PROMISE



const promiseOne = new Promise(function(resolve,reject){
    // Do an async Task
    // DB Calls,Cryptography,network...
    setTimeout(function(){
        console.log("Async task is created");
        resolve();
    },1000)
});
promiseOne.then(function(){ // this then is directly related to resolve parameter passed above
    console.log("Promise one is consumed");
    
})



// Another way to writing same logic.

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2 ");
        resolve();
    },1000)
}).then(function(){
    console.log("Promise Type 2 is consumed");
})



// How to pass data in an promise through resolve

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("hi from third Promise");
        resolve({userName:'ABD',role:'Cricketer'})// we can pass any of data as a parameter either object ,array etc
    },1000)
})

promiseThree.then(function(user){// we expect data here as an argument the data passed in resolve function is present here.
    console.log(user);
    
})


// Let's write a promise which is preferred in Industry with all it's resolved and reject State

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;// change this value to monitor the variant of output [true,false]
        if(!error){
            resolve({userName:"VK",role:"Cricketer"})

        }else{
            reject("Error: Something goes Wrong")
        }
        
    },1000)
})


promiseFour.then(function(user){
    console.log(user);// here we get user object which passed in resolve.
    return user.userName // returning the value of username for further chaining.
}).then(function(userName){
    console.log(userName);// here we get the value of userName 
    
}).catch(function(e){
    console.log("Error got : ",e);// here we're triggring error
    
}).finally(function(){
    console.log("I am running always");
    
})


//  in this example we create a promise and testing with passing an error to check the state of then and catch and after we are chaining .then to get for  the further value we can also destructure it.
// At the end we use finally keyWord that run's surely at the endeither resolve triggered or reject triggered.




// handle promise with async and await

const promiseFive = new Promise
(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userName:"CHG",role:"cricketer"})
        }else{
            reject("Error: got an error")
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive();


// This is all about promise 


// let's apply all this information in realworld usecase

// async function getAllUser() {
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json();
//     console.log(data);
    
//    } catch (error) {
//     console.log(error);
    
//    }
// }
// getAllUser()


// write same code in then and catch format


fetch('https://jsonplaceholder.typicode.com/users').then(function(response){
    return response.json()
}).then((data)=>{
    console.log(data);
    
})
.catch(function(e){
    console.log(e);
    
})
