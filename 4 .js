//Answer no  1: Declare 3 variables in one statement
var name = "Zeeshan", age = 20, city = "Karachi";

// Answer no 2: Declare 5 legal & 5 illegal variable names
// Legal: myVar, $price, _user, user123, firstName
// Illegal: 1stName, user-name, @home, var, my name

//Answer no  3: Display rules in browser
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p>Variable names can only contain numbers, $ and _. For example: $my_1stVariable</p>");
document.write("<p>Variables must begin with a letter, $ or _. For example $name, _name or name</p>");
document.write("<p>Variable names are case sensitive</p>");
document.write("<p>Variable names should not be JS keywords</p>");

// Answer no  4: Addition of two numbers
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("<p>Sum of " + num1 + " and " + num2 + " is " + sum + "</p>");

//Answer no  5: Subtraction, Multiplication, Division & Modulus
var val1 = 10;
var val2 = 5;

var diff = val1 - val2;
var product = val1 * val2;
var quotient = val1 / val2;
var remainder = val1 % val2;

document.write("<p>Result of subtracting " + val2 + " from " + val1 + " is " + diff + "</p>");