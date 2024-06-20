let pending
let tasks =[
    {
        id:1, task:"task1", completed:false,
        date: '11-06-2024'
    },
    {
        id:2, task:"task2", completed:true,
        date: '10-06-2024'
    },
    {
        id:3, task:"task1", completed:false,
        date: '09-06-2024'
    }
]

pending = tasks.filter(task => task.completed == false)

console.log(pending)