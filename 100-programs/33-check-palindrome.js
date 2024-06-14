let data = "radar";
let revData = data.split("").reverse().join("");
console.log("data: ",data);
console.log("revData: ",revData);
if(data==revData){
    console.log(data," is Palindrome");

}
else{
    console.log(data," is not Palindrome");
}
