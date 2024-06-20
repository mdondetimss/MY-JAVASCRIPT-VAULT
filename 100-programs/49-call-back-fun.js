function funA(x, callBackFun){
    console.log(x);
    callBackFun();
}

function funB(){
    console.log("Coding is easy & fun")
}

funA("Practice is the key for success", funB)