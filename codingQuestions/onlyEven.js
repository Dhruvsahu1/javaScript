const arr = [1,2,3,4,5,6,7,8,9,10];

let newArr = arr.filter((num)=> num%2==0);
console.log(newArr);

        //    or

function evenOdd(arr){
    let even = [];
    for(let i = 0;i<arr.length;i++){
        if(arr[i]%2==0){
            even.push(arr[i]);
        }
    }
    return even;
}
console.log(evenOdd([1,2,4,5,6,78,-8,8,9,87,6,5]))