let nums = [1,2,3,4,5,6];

let foundvalue =false;
let i=0;
while(foundvalue == false){
    console.log(nums[i]);
    if (nums[i]==4){
        console.log(nums[i],"found");
        foundvalue= true;
    }
    if (i == nums.length -1){
        console.log("didn't found 7")
        break;
    
    }
    i++;
}