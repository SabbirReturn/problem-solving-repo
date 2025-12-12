function checkWord(words){
    for(let word of words){
        if(word.includes('palindrome')){
            return true;
        }
        
    }
    return false;
}

let word = checkWord(['sabbir','hasan','palindrome']);
console.log(word)