var data = 'I am a mulesoft developer and having 2 years 10 months of experience';

var dataArray =data.split(" ")
var results = []
dataArray.forEach(word =>{
    if(word.length>4){
        results.push(word)
    }
});
console.log(results);