let tasks =[
    { id:1, title: "Java Developer", isAvailable: false},
    { id:2, title: "Mule Developer", isAvailable: false},
    { id:3, title: "Python Developer", isAvailable: false}
]

console.log(tasks)
tasks = tasks.filter(tasks =>tasks.id!=2);
   

console.log(tasks)