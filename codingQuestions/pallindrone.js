function isPallindrone(str){
    let ans  = true;
    if(str == ""){
        return ans;
    }
    let start = 0;
    let end = str.length-1;
    while(start<end){
        if(str.charAt(start)!=str.charAt(end)){
            ans = false;
        }
        start++;
        end--;
        
    }
    return ans;
}
console.log(isPallindrone("munna"));