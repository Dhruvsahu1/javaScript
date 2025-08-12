const str = "adhfksjdldsdsnsmcmcsfjjdisdscxcsfss";
console.log(str.split("").reverse().join(""));



function reverseString(s){
    let newString = "";
    for(let i = s.length;i>=0;i--){
        newString += s.charAt(i);
    
    }
    return newString;
}
console.log(reverseString("adhfksjdldsdsnsmcmcsfjjdisdscxcsfss"));


//    or

function reverseStringRecursive(s,len,res=""){
    if(len<0){
        return res;
    }
    return reverseStringRecursive(s,len-1,res+=s.charAt(len));
}
console.log(reverseStringRecursive("Dhruv","Dhruv".length));
