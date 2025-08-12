function removeDuplicates(arr){
    let newArr = [];
    for(let i =  0;i<arr.length;i++){
        if(newArr.indexOf(arr[i])==-1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeDuplicates([1,2,1,3,4,3,5,3,4,5,1]));
                         // or 

function removeDuplicates(arr) {
 return Array.from(new Set(arr));
 // return [...new Set(arr)] => another way
}
console.log(removeDuplicates([1,2,1,3,4,3,5,3,4,5,1]));

                         // or 


function removeDuplicates(arr){
    let uniqueSet = new Set();
    let newArr = [];
    for(let i  =0;i<arr.length;i++){
        if(!uniqueSet.has(arr[i])){
            uniqueSet.add(arr[i]);
            newArr.push(arr[i]);
        }
    }
    return newArr;

}
console.log(removeDuplicates([1,2,1,3,4,3,5,3,4,5,1]));