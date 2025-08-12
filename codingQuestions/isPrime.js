function isPrime(n){
    if(n<=1){
        return false;
    }
    for(let i = 2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(5));
    
                        //   or

function isPrimeRecursive(n,i=2){
    if(n<=1){
        return false;
    }
    if(i>Math.sqrt(n)){
        return true;
    }
    if(n%i==0){
        return false;
    }
    return isPrime(n,i+1);
}
isPrimeRecursive(5);