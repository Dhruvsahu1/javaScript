function abc(){
    console.log(abc.xyz);
    
}

abc();
abc.xyz = 123;

abc();

const numbers = [1, 2, 3, 4, 5];
numbers[100] = 500;
console.log(numbers);

console.log(typeof typeof 100);
const arr = ['Dhruv',"farhan"];
console.log(...arr);


console.log(parseInt('10+2'));
console.log(parseInt('7fm'));
console.log(parseInt('m7f'));


console.log(isNaN('102'+'34'));


console.log([1,2,3].map(num=>{
    if(num>0) {return} ;
    
    return num*2;
}));



{
    function abc(){
        console.log("Dhruv");
        
    }
}
abc();



function xyz(a,b){
    // "use strict"
    a = 100;
    b = 200;

    return arguments[0] + arguments[1];
}
console.log(
    xyz(200,300));
