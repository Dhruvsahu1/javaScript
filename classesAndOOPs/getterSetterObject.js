const user  = {
    _email : "thor@gmail.com",
    _password : "thunder_23",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value;
    },
    get password(){
        return this._password.toUpperCase();
    },
    set password(value){
        this._password = value;
    }
}

const h1 = Object.create(user);
console.log(h1.email);
console.log(h1.password);
