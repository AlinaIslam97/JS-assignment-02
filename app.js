// Question 01

var city = prompt("where do you live?");
var correctAns = "Karachi";

if (city === correctAns) {
  alert("Welcome to city of lights");
}

// Question 02

var gender = prompt("Please Enter Your Gender");
var male = "Male";
var feMale = "Female";

if (gender === male) {
  alert("Good Morning Sir.");
} if (gender === feMale) {
  alert("Good Morning Ma’am.");
}

// Question 03

var color = prompt("Enter Signal Color");
var red = "Red";
var yellow = "Yellow";
var green = "Green";

if (color === red) {
  alert("Must Stop.");
} if (color === yellow) {
  alert("Ready to move.");
} if (color === green) {
  alert("Move now");
} else {
  alert("Invalid color");
}

// Question 04

var fuel = +prompt("Enter the remaining fuel in litres:");

if (fuel < 0.25) {
  alert("Please refill the fuel in your car");
} else {
  alert("You have enough fuel");
}

// Question 05

// a
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
} // this statement is working 

// b
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
} else {
  alert(false);
} // this statement is not working 

// c
var c = 12;

if (c++ === 13) {
  alert("condition 1 is true");
} else {
  alert(false);
} // this statement is not working 

if (c === 13) {
  alert("condition 2 is true");
} else {
  alert(false);
} // this statement is not working 

if (++c < 14) {
  alert("condition 3 is true");
} // this statement is working

if (c === 14) {
  alert("condition 4 is true");
} else {
  alert(false);
} // this statement is not working 

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
} // this statement is working

// e
if (true) {
  alert("True");
} // this statement is working
if (false) {
  alert("False");
} // this statement is working

// f
if ("car" < "cat") {
  alert("car is smaller than cat");
} // this statement is working but condition is false it depends on the size of car if car is toy.

// Question 06

var subject1 = +prompt("Enter your number of subject 1");
var subject2 = +prompt("Enter your number of subject 2");
var subject3 = +prompt("Enter your number of subject 3");
var totalMarks = 300;
var obtainedMarks = subject1 + subject2 + subject3;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade;
var remarks;

if (percentage >= 80) {
  grade = 'A-one';
  remarks = 'Excellent';
} else if (percentage >= 70) {
  grade = 'A';
  remarks = 'Good';
} else if (percentage >= 60) {
  grade = 'B';
  remarks = 'Needs Improvement';
} else if (percentage < 60) {
  grade = 'Fail';
  remarks = 'sorry';
}

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>" + "<br>");


// Question 07

var userGuess = +prompt("Guess the secret number (between 1 and 10):");
var secretNumber = 7;
var guessedNumber = "+6";

if (userGuess === secretNumber) {
  alert("Bingo! Correct answer");
} else if (userGuess === guessedNumber) {
  alert("Close enough to the correct answer");
} else {
  alert("Sorry, try again. The correct number was " + secretNumber);
}


// Question 08

var number = +prompt("Enter the Number and check its divible by 3 or not");

if (number % 3 === 0) {
  alert("The number " + number + " is divisible by 3.");
} else {
  alert("The number " + number + " is not divisible by 3.");
}

// Question 09

var oddEvenNumber = +prompt("Input number and check its odd number or even number");

if (oddEvenNumber % 2 === 0) {
  alert("The number " + oddEvenNumber + " is even.");
} else {
  alert("The number " + oddEvenNumber + " is odd.");
}

// Question 10
var temperature = +prompt("Enter Temperature: ");

if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today’s Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today’s weather is so Cool.");
} else {
  alert("It is very cold outside.");
}

// Question 11

var num1 = +prompt("Enter Your Value 1: ");
var num2 = +prompt("Enter Your Value 2: ");

var sum = num1 + num2;
var sub = num1 - num2;
var product = num1 * num2;
var divide = num1 / num2;
var modulus = num1 % num2;
var exponent = num1 ** num2;

document.write("Sum = " + sum + "<br/>");
document.write("sub = " + sub + "<br/>");
document.write("product = " + product + "<br/>");
document.write("divide = " + divide + "<br/>");
document.write("modulus = " + modulus + "<br/>");
document.write("exponent = " + exponent + "<br/>");