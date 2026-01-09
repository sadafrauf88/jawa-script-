// ASSIGNMENT: VARIABLE NAMES (Legal & Illegal)

// 1. Declare 3 variables in one statement
var name = "Zeeshan", age = 20, city = "Karachi";

// 2. Declare 5 legal & 5 illegal variable names
// Legal: myVar, _user, $price, user123, first_name
// Illegal: 1stname, user-name, @home, var, my name

// 3. Display rules in your browser
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p>Variable names can only contain numbers, $ and _. For example: $my_1stVariable</p>");
document.write("<p>Variables must begin with a letter, $ or _. For example: $name, _name or name</p>");
document.write("<p>Variable names are case sensitive</p>");
document.write("<p>Variable names should not be JS keywords</p>");

document.write("<hr>"); // Horizontal line to separate assignments


// ASSIGNMENT: VARIABLES FOR NUMBERS

// 1. Declare a variable called age & show in alert box
var myAge = 15;
alert("I am " + myAge + " years old");

// 2. Declare & initialize a variable to track visits
var numberOfVisits = 14;
alert("You have visited this site " + numberOfVisits + " times");

// 3. Declare birthYear and show in browser
var birthYear = 1990;
document.write("<p>My birth year is " + birthYear + "<br>Data type of my ddeclared variable is number</p>");

// 4. Clothing store order variables
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;

document.write("<p><b>" + visitorName + "</b> ordered <b>" + quantity + " " + productTitle + "</b>(s) on XYZ Clothing store</p>");