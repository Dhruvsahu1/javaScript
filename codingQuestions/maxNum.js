function findMax(arr){
    if(arr.length==0){
        return undefined;
    }
    let max = arr[0];
    for(let i = 1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }

    }
    return max;
}
console.log(findMax([1,2,34,5,6,-2,-6,9]));


                            //   or

function findMaxRecursive(arr,i =0,max=0){
    if(i>= arr.length){
        return max;
    }
    if(arr[i]> max){
        max = arr[i];
    }
    return findMaxRecursive(arr,i+1,max);
}
console.log(findMaxRecursive([1,2,3,4,6,7,88,98,76,989,4565,66666,77]));
