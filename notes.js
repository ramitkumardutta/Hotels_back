console.log("notes page loaded");

var age = 24;
const addnumber = (a, b) => {
    return a + b;
}

// you have to export the variables or functions to use them in other files
module.exports = {
    age,
    addnumber
}