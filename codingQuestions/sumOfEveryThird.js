function sumOfThird(arr) {
    let ans = [];
    let count = 0;
    let i = 0;
    let sum = 0;
    while (i < arr.length) {
        if (count < 3) {
            sum += arr[i];
            count++;
        } else {
            ans.push(sum);
            sum = 0;
            count = 0;
            continue; 
        }
        i++;
    }
   
    if (count > 0) {
        ans.push(sum);
    }
    return ans;
}

console.log(sumOfThird([1,2,3,4,5,6,7,8,9,10,11,12]));
