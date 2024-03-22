"use strict";
// create a islegal function which will accept a user object as an input
// and will give the boolean o/p if the age > 18  ture else false
// So here we will learn how to define type for the object
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
const x = isLegal({
    firstName: "rashid",
    lastName: "ziuya",
    age: 15
});
if (x) {
    console.log("he is 18+");
}
else {
    console.log("he is not yet 18 +");
}
