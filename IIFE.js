// Immediately Invoked Function Expression (IIFE)
// The function which immediatly calls are IIFE but also from saving to the pollution of global scope variables


// Example of IIFE
// connection to db
// we don't want to pollute the global scope with variables

// (Function Defination) (Execution call) Syntax for IIFE ()();
(function hello(){//IT is named IIFE
    console.log("Hello World! I am IIFE function"); 
    
})(); // it will give Hello World! I am IIFE function as output and the type of this was undefined;
//  If you not apply column then the next function is not run because it stucks on that context
// (()=>{
//     console.log("Hello World! I am IIFE@ function"); 
    
// })();
// ARGUMENTED IIFE
(function(name){
    console.log(`hello IIFE fro ${name}`); 
    
})("IRON")
