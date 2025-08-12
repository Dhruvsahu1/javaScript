function longesetWord(s){
    let wordsArr = s.split(" ");
    let longest = "";
    for(let i = 0;i<wordsArr.length;i++){
        if(wordsArr[i].length > longest.length){
            longest = wordsArr[i];
        }
    }
    return longest;
}
console.log(longesetWord("Hello My name is Dhruv and i am a nephophilic person "));



                        // or

function longesetWordRecursive(wordsArr,index = 0,longest = ""){
    if(index >= wordsArr.length){
        return longest;
    }
    if(wordsArr[index].length> longest.length){
        longest = wordsArr[index];
    }
    return longesetWordRecursive(wordsArr,index+1,longest);
    
}
function getWord(s){
    let wordsArr = s.split(" ");
    return longesetWordRecursive(wordsArr);
}
console.log(getWord("hello my name is dhruv sahu and i am a full stack developer who is working in several projects"));
