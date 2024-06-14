let nums =[1,2,3,4,5,6,7,8,9,10];
let result ={even:[],odd:[]};
for(var num of nums ){
    if(num%2==0){
        result.even.push(num);
    }
    else{
        result.odd.push(num);
    }
}
console.log(result);
