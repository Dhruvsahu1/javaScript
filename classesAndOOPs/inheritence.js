class User{
    constructor(userName){
        this.userName = userName;
    }
    logMe(){
        console.log(`User name is ${this.userName}`);
        
    }
}

class Admin extends User{
    constructor(userName,role,email){
        super(userName); // calling the parent class constructor
        this.role = role;
        this.email = email;
    }
    AssignTask(){
        console.log(`Task is Assigned by ${this.userName}`);
    }
}

const thor = new User("Thor");
thor.logMe(); // User name is Thor
const hulk  = new Admin("Hulk","Admin","hulk@marvel.com");
hulk.logMe();   
hulk.AssignTask(); // Task is Assigned by Hulk


console.log( thor === hulk);

console.log(thor instanceof User); // true means it is created by same instances.
