//  let's try to add properties and check the level where these properties are available or not.


let myHeroes = ['Hulk', 'Thor', 'Ironman'];

let heroPower = {
    hulk : 'Smash', 
    thor : 'Thunder',
    ironman : 'Genius',
    gethulkPower : function(){
        console.log(`Hulk's power is ${this.hulk}`);
        
    }
}

// heroPower.Avenger(); it will give an error because Avenger is not a function in heroPower object.
// let's try to inject the avenger() method but we want that this method is accesible for all

Object.prototype.Avenger = function(){
    console.log(`All these SuperHeroes are Avengers`);
}
heroPower.Avenger(); // All these SuperHeroes are Avengers
myHeroes.Avenger(); // All these SuperHeroes are Avengers

//  here you can see that we are able to Access the Avenger method from both heroPower object and myHeroes array. because we set this method on the top of the prototype chain.

// let's try to add a property to the myHeroes array.
Array.prototype.famousHeroes = function(){
    console.log(
        `these are all the famous heroes: ${this.join(', ')}`
    );
    
}

myHeroes.famousHeroes(); // these are all the famous heroes: Hulk, Thor, Ironman
//  but we are not able to access this property from the heroPower object. because we added this property to the Array prototype and not to the Object prototype.





// let's learn the old and new Syntax for adding properties to the prototype chain.

// old syntax
const user = {
    name : "Hulk",
    email : "Hulk@marvel.com"
}

const teacher = {
    makeVideo : true,
}

const teachingSupport = {
    isAvailable : true,
}

const TASupport = {
    makeAssignments : "jsAssignments",
    fullTime : true,
    __proto__ : teachingSupport
}

teacher.__proto__ = user

// Modern Syntax

// this is also called as prototype chaining, where we are setting the prototype of one object to another object.and prototypal inheritence 
Object.setPrototypeOf(teachingSupport, teacher);



// Problem ?
//  we have a string with spaces at the end like ("Hello World    "), and we want to remove the spaces at the end of the string.
// but the catch is user Want's a propety trueLength named

String.prototype.truelength = function(){
    console.log(`the Original length of the ${this} is  ${this.trim().length}`);
}


let name = "Hulk           ";
console.log(name.length); // 15
name.truelength(); // the Original length of the String is 4


"IronMan     ".truelength(); // the Original length of the String is 7

