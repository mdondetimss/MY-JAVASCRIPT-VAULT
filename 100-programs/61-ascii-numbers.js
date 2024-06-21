let numbers =[ 72, 97, 112, 112, 121, 32, 73, 110, 100, 101, 112, 101, 110, 100, 101, 110, 99, 101, 32, 68, 97, 121]

//ASCII number
// A-Z -> 65-90
// a-z -> 97-122

let data = "";

numbers.forEach(num =>{
    data = data + String.fromCharCode(num)
})

console.log(data)