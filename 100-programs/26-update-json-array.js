let tasks =[
    { id:1, title: "Java Developer", isAvailable: false},
    { id:2, title: "Mule Developer", isAvailable: false},
    { id:2, title: "Python Developer", isAvailable: false}
]

console.log(tasks)
tasks = tasks.map(item =>{
    if( item.id == 1){
        item.isAvailable = true
    }
    return item;
})

console.log(tasks)
