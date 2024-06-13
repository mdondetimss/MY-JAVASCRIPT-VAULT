//without map function
let users =[ "javascript", "java", "reactjs"]

for(let i=0; i< users.length; i++){
    users[i] = users[i].toUpperCase();
}


//using map
users =users.map( item =>{
    return item.toUpperCase();
})
console.log(users)