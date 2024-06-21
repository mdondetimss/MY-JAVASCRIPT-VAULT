const readlineSync = require('readline-sync');

var emailId = readlineSync.question('Email:');
var password = readlineSync.question('Password:')

if(emailId == "contact@gmail.com"
    && password == "12345"){
        console.log("Login success")
    }else{
        console.log("Invalid login crendetails")
    }
