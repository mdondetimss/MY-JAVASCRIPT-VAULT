let nums = [1,2,3,4,5,6]

for (let i=0; i<nums.length; i++){
console.log(nums[i]);
if (nums[i]==4){
    console.log(nums[i], "found")
    break;
}
}