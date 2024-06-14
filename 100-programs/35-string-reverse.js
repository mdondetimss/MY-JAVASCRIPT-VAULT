let data ="JavaScript";
let revData ="";
for (let i=data.length-1; i>=0; i--){
    revData = revData+ data[i];
}
console.log("Data: " + data);
console.log("Rev data",revData);