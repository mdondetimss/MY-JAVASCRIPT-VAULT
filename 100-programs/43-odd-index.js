let data = "Coding id easy";
let dataArray = data.split("");
dataArray.forEach((char,i) => {
    if(i%2!=0){
        console.log(char);
    }
});