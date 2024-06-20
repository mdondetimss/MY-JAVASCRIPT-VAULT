let data = [
    {id:1, name:"JavaScript", easyTolearn: true},
    {id:2, name:"Python", easyTolearn: true},
    {id:3, name:"Java", easyTolearn: false}
]

console.log(data)

data = data.map(item =>{
    if(item.id==3){
        item.easyTolearn = true;

    }
    return item
})

console.log(data)