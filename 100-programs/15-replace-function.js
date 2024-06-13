let text = "please visit Microsoft and Microsoft!";

// to replace first occurence
text = text.replace("Microsoft", "Google")

// to replace all occurence
text = text.replace(/Microsoft/g, "Google")
console.log(text)