const user  = {
    username : "thor",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log(`get user details from Api`);
        console.log(`UserName is : ${this.username}`);// if you don't use this here it will give you error because of the context because userName is not in its context it is present out of this function scope
        console.log(this); // this will print whole object of it's context
        
        // THe this works as 

//         In a regular function (not arrow function):

//            this refers to the object that called the function.

//         In an arrow function:

//             this is lexically bound, meaning it inherits this from the surrounding (outer) scope.


    },

}

user.getUserDetails()
console.log(this); // if you use this here it will give blank object but in browser it will give window obkect.
