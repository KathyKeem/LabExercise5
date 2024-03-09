//Task 4-1
let password = prompt("Enter your password: ");

//Task 4-2
let lengthReq = 10;
if (password.length >= lengthReq) {
    lengthReq = 'PASSED';
} else {
    lengthReq = 'FAILED (Note: Password must be at least 10 characters long)';
}

//Task 4-3
let upperCase = /[A-Z]/.test(password);
let lowerCase = /[a-z]/.test(password);
let num = /[0-9]/.test(password);
let specialChar = /[^A-Za-z0-9]/.test(password);

//Task 4-4
let strengthRate = '';
if (password.length >= 12 && upperCase && lowerCase && num && specialChar) {
    strengthRate = 'Strong';
} else if ((password.length >= 10 && password.length < 12) && ((upperCase && lowerCase && num) || (upperCase && lowerCase && specialChar) && (lowerCase && num & specialChar))) {
    strengthRate = 'Moderate';
} else {
    strengthRate = 'Weak';
}

//Task 4-5
console.log("Password Strength: " + strengthRate);
console.log("Feedback: " + lengthReq);
console.log("Uppercase Letters: " + upperCase);
console.log("Lowercase Letters: " + lowerCase);
console.log("Numbers: " + num);
console.log("Special Characters: " + specialChar);

