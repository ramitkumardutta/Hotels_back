// function add(a, b) {
//     return a + b;
// }
// var add = (a, b) => {return a + b};

// var add  = (a, b) => a + b;

// var result = add(145, 58);
// console.log("The result is: " + result);

// (function() {console.log("Hello World")})();

// Callback functions

// function callback() {
//     console.log("Callback function");
// }

// const add = (a, b, callback) => {
//     var result = a + b;
//     console.log("The result is: " + result);
//     callback();
// }

// add(12, 1000000000000000, function() {
//     console.log("Callback function called");
// });


//! fs and os

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greetings.txt', 'Hi ' + user.username + '!\n', () => {
//     console.log('File is Created');
// });

// const notes = require('./notes.js');
// var _ = require('lodash');


// console.log("Server file is available");
// var age = notes.age;
// console.log("Age from notes.js: " + age);
// var sum = notes.addnumber(10, 20);
// console.log("Sum from notes.js: " + sum);

// var data = ["person", "person", 1, 2, 1, 2, "name", "age", "2"];
// var filter = _.uniq(data);
// console.log(filter);

// console.log("\n");
// console.log(_.isString(5/8));

//! Json 

// const jsonString = '{"name":"John", "age":30, "city":"New York"}';
// const jsonObj = JSON.parse(jsonString);

// console.log(jsonObj.name);

// console.log(typeof jsonString);

const objectToConvert = {
    name : "Alice",
    age : 25
};

const json = JSON.stringify(objectToConvert);
console.log(typeof json);
console.log(json);