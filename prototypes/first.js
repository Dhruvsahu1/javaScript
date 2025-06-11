//  basically javaScript has a prototypal behaviours where objects inherit properties and methods from their prototype.
// called prototypal inheritance.

//  in javascript almost  all things are objects, and objects have a prototype property which is used to inherit properties and methods from its prototype.

// Array => Object => null
// String => Object => null

// so all the properties which are availabel in object can also be available for array and String as well.


function multi(num){
    return num*5;
}
multi.power = 2;
console.log(multi(5)); // 25
console.log(multi.power); // 2
console.log(multi.prototype); // {}


// let's try to add our function in the function

function createUser(userName,score){
    this.userName = userName;
    this.score = score;
}

createUser.prototype.increase = function(){
    this.score++;
}
createUser.prototype.printval = function(){
    console.log(`Score is ${this.score}`);
    
}
// const firstUser = createUser("Hulk",25);
// const SecondUser = createUser("Thor",250);

// // firstUser.printval();
// // SecondUser.printval();  if you use this type it gives an error cannot read properties of undefined (reading 'printval')
// because of new keyword it creates a new object and it doesn't inherit the prototype properties.

const firstUser = new createUser("Hulk",25);
const SecondUser = new createUser("Thor",250);
firstUser.printval(); // now it does not give an error