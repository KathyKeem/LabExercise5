//Task 2-1
let firstName = prompt("Enter your first name: ");
let lastName = prompt("Enter your last name: ");

//Task 2-2
let fullName = firstName + " " + lastName;

//Task 2-3
let strLength = fullName.length;
console.log(strLength);

let strUpperCase = fullName.toUpperCase();
console.log(strUpperCase);

let strLowerCase = fullName.toLowerCase();
console.log(strLowerCase);

let strSubstring = fullName.substring(0, 4);
console.log(strSubstring);

//Task 2-4
let strLiteral = `My firstname is ${firstName} and my lastname is ${lastName}`;
console.log(strLiteral);

//Task 2-5
var string1 = "apple";
var string2 = "orange";

let comparison = (string1 === string2);
console.log(comparison);

let comparison2 = (string1 == string2);
console.log(comparison2);

let comparison3 = (string1 !== string2);
console.log(comparison3);

let comparison4 = (string1 != string2);
console.log(comparison4);

let comparison5 = (string1 < string2);
console.log(comparison5);

let comparison6 = (string1 > string2);
console.log(comparison6);

let comparison7 = (string1 <= string2);
console.log(comparison7);

let comparison8 = (string1 >= string2);
console.log(comparison8);

//Task 2-6
let strName = "My name is Kathrine Mae Ayuban.";
let strSplit = strName.split(" ", 4);
console.log(strSplit);

