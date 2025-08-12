function factorial(n) {
  if(n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(3));
                    // or

function factorial(n){
    let fact = 1;
    for(let i =n;i>0;i--){
        fact = fact*i;
    }
    return fact;
}
console.log(factorial(5));
