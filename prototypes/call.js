//  use of call function in javScript 

function setUserName(username){
    this.userName = username;
    console.log("called");
}

// function createUser(userName,email,password){
//     setUserName(userName)
//     this.email = email;
//     this.password = password;
// }

// const firstUser = new createUser("Hulk","hulk@marvel.com","123456")
// console.log(firstUser);// here tou see a problem that setUserName is not called and userName is not set in firstUser object.
//  the only output is email and password.
// this is because when in execution context of setUserName function this is assigning a value but once it is executed it is removed from the memory and the value is not set in firstUser object. so we need to pass the refrence of createUser context to assign the value to the userName property of firstUser object.

//  like

function createUser(userName,email,password){
    setUserName.call(this, userName); // here we are passing the context of createUser to setUserName function.
    this.email = email;
    this.password = password;
}

const hulk = new createUser("hulk","hulk@marvel.com","123456");
console.log(hulk); // now you see that userName is also set in the firstUser object.

//  this is the correct way to use call function in JavaScript. 