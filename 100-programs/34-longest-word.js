let data = "Javascript Interview Question";
let longestWord ="";
let words = data.split(" ");
for(let word of words){
    if(word.length > longestWord.length){
        longestWord = word;
    }
}
console.log("Longest word: " + longestWord);
