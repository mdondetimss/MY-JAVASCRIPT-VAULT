let isFristOrder ="yes";
let isRecentSignup ="no"

if (isFristOrder == "yes" && isRecentSignup == "yes"){
    console.log("Special offer -25%")
}

if (isFristOrder == "yes" || isRecentSignup == "yes"){
    console.log("Special offer -20%")
}
