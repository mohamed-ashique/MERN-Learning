console.log("Day 25 - JavaScript Operators");

// Basic arithmetic
const firstNumber = 20;
const secondNumber = 10;

const addition = firstNumber + secondNumber;
const subtraction = firstNumber - secondNumber;
const multiplication = firstNumber * secondNumber;
const division = firstNumber / secondNumber;

console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);

// Remainder
const remainder = 10 % 3;
console.log("Remainder:", remainder);

// Power
const square = 5 ** 2;
console.log("Square:", square);

// Assignment operators
let score = 50;

score += 10;
console.log("Score after adding 10:", score);

score -= 5;
console.log("Score after subtracting 5:", score);

score *= 2;
console.log("Score after multiplying by 2:", score);

score /= 5;
console.log("Score after dividing by 5:", score);

// Increment and decrement
let count = 0;

count++;
console.log("Count after increment:", count);

count--;
console.log("Count after decrement:", count);

// String concatenation
const firstName = "Mohamed";
const lastName = "Ashique";

const fullName = firstName + " " + lastName;
console.log("Full name:", fullName);

// String + number problem
console.log("10" + 5);

// Convert string to number
const rent = "5000";
const months = "12";

const yearlyRent = Number(rent) * Number(months);
console.log("Yearly rent:", yearlyRent);

// Comparison operators
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 8);

// == vs ===
console.log(10 == "10");
console.log(10 === "10");


const monthlyRentAmount = 12000;
const numberOfMonths = 6;
const securityDeposit = 5000;
const agencyFee = 3000;

const rentTotal = monthlyRentAmount * numberOfMonths;
const moveInTotal = rentTotal + securityDeposit + agencyFee;

console.log("Rent total:", rentTotal);
console.log("Security deposit:", securityDeposit);
console.log("Agency fee:", agencyFee);
console.log("Move-in total:", moveInTotal);