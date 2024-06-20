let data={
    id:1, name:"yamini", values:[20,30,40]
}

let data2 ={...data};
console.log(data2.values)

// without using stringify the value will be chnaged in first variable 
data2.values.push(50)

console.log(data2)
console.log(data)

//with stringify

let data3 =JSON.parse(JSON.stringify(data))
data3.values.push(60)

console.log(data3)
console.log("data1",data)
