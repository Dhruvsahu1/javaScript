function smallestWord(s){
    let wordsArr = s.split(" ");
    let smallest = wordsArr[0];
    for(let i = 1;i<wordsArr.length;i++){
        if(wordsArr[i].length<smallest.length){
            smallest = wordsArr[i];
        }
    }
    return smallest;
}
console.log(smallestWord("Hello my name is dhrub=v and i am a software developer"));
