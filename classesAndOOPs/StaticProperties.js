class user{
    constructor(userName)
    {
        this.userName = userName;
    }
    logMe(){
        return `User name is ${this.userName}`;
    }
    // createId(){
    //     return `${this.userName}_${Math.floor(Math.random() * 1000)}`;
    // } this method is used to assign the id of user but sometimes w do not wnat to give access to this method to user. so we use static property to achieve this.
    // static createId(){
    //     return `${this.userName}_${Math.floor(Math.random() * 1000)}`;
    // }
    static createId(userName){
        return `${userName}_${Math.floor(Math.random() * 1000)}`;
    }
    //  it doesnot allow any one to access this method from the instance of the class. it is only accessible from the class itself.
}

const hulk = new user("Hulk");
console.log(hulk.logMe()); // User name is Hulk
// console.log(hulk.createId()); // Hulk_123 (random number will be different each time) it is for non Static property.

console.log(user.createId("Hulk")); // it gives the output undefined and a numberattach to it like undefined_731
 
// the solution is we can pass argument while creating id so it gives the userName as well.
