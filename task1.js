//Task 1-1
let strVar = "Kathrine Mae Ayuban";
let numVar = 562003;
let boolVar = true;

//Task 1-2a (Addition)
let num1 = parseInt(prompt("Addition: \nEnter your first number: "));
let num2 = parseInt(prompt("Addition: \nEnter your second number: "));
let sum = num1 + num2;

console.log("Addition: "+ sum +"");

//Task 1-2b (Subtraction)
let num3 = parseInt(prompt("Subtraction: \nEnter your first number: "));
let num4 = parseInt(prompt("Subtraction: \nEnter your second number: "));
let difference = num3 - num4;

console.log("Subtraction: "+ difference +"");

//Task 1-2c (Multiplication)
let num5 = parseInt(prompt("Multiplication: \nEnter your first number: "));
let num6 = parseInt(prompt("Multiplication: \nEnter your second number: "));
let multiply = num5 * num6;

console.log("Multiplication: " + multiply +"");

//Task 1-2d (Division)
let num7 = parseInt(prompt("Division: \nEnter your first number: "));
let num8 = parseInt(prompt("Division: \nEnter your second number: "));
let divide = num7 / num8;

console.log("Division: " + divide + "");

//Task 1-3
let num9 = parseInt(prompt("Implement basic conditional statements (if, else) to compare values. \nEnter your first number: "));
let num10 = parseInt(prompt("Enter your second number: "));

if (num9 > num10) {
    console.log("First number is greater than second number.")
} else {
    console.log("First number is lesser than second number.")
}