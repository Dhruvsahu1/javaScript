// class User{
//     constructor(username, password, email){
//         this.username = username;
//         this.password = password;
//         this.email = email;
//     }

//     encryptPassword(){
//         return `${this.password}abc`;        
//     }

//     changeUserName(){
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const hulk  = new User("Hulk","12340","Hulk@marvel.com");
// console.log(hulk.encryptPassword());
// console.log(hulk.changeUserName());


//  behind the Scene of the class

function User(Username, password, email){
    this.username = Username;
    this.password = password;
    this.email = email;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;        
}
User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`;
}
const hulk  = new User("Hulk","12340","Hulk@marvel.com");
console.log(hulk.encryptPassword());
console.log(hulk.changeUserName());