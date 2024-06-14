const axios = require('axios')
async function getData(){
try{
let data = await axios.get(
 "http://localhost:3000/getData"
);
}catch(ex){
console. log (ex.message)
} 
}