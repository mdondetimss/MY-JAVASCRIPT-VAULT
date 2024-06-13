
var firstname = "Yamini";
var lastname = "Sangam";

// Concatenation function
var fullName = firstname + " " + lastname;
console.log(fullName);

// uppercase function
var ucName = fullName.toUpperCase();
console.log(ucName);

// lowercase function
var lcName = fullName.toLowerCase();
console.log(lcName);

var data = "Java Script is the world's most popular programming language.";

// Split function
var dataArray = data.split(" ");
console.log(dataArray);

//capitalize 
var wcdata = data.split(" ").map(item => item.substring(0,1).toUpperCase() + item.substring(1)).join(" ")
console.log(wcdata);


