//for loop
let products = ["Google Pixel", "OnePlus", "IPhone", "Windows"];
for(let i=0; i< products.length; i++)
    {
        console.log(products[i]);
    }


//while loop
let i=0;
let processCompleted = false;

while (processCompleted == false){

    if(products[i] == "IPhone"){
        console.log("while loop" , products[i]);
        processCompleted = true;
    }
    i++;
}