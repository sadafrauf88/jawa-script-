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
// 1. ASSIGNMENT: VARIABLE NAMES (Legal & Illegal)

// Q1: Declare 3 variables in one statement
var name = "Zeeshan", age = 20, city = "Karachi";

// Q2: 5 Legal & 5 Illegal variable names
// Legal: myVar, _user, $price, user123, first_name
// Illegal: 1stname, user-name, @home, var, my name

// Q3: Display rules in browser
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p>Variable names can only contain numbers, $ and _. For example: $my_1stVariable</p>");
document.write("<p>Variables must begin with a letter, $ or _. For example: $name, _name or name</p>");
document.write("<p>Variable names are case sensitive</p>");
document.write("<p>Variable names should not be JS keywords</p>");
document.write("<hr>");


// 2. ASSIGNMENT: VARIABLES FOR NUMBERS

// Q1: Age Alert
var myAge = 15;
alert("I am " + myAge + " years old");

// Q2: Visitor Tracking Alert
var visits = 14;
alert("You have visited this site " + visits + " times");

// Q3: Birth Year in browser
var birthYear = 1990;
document.write("<p>My birth year is " + birthYear + "<br>Data type of my declared variable is number</p>");

// Q4: Clothing Store Order
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;
document.write("<p><b>" + visitorName + "</b> ordered <b>" + quantity + " " + productTitle + "</b>(s) on XYZ Clothing store</p>");
document.write("<hr>");


// 3. ASSIGNMENT: MATH EXPRESSIONS


// Q1 & Q2: Basic Math
var num1 = 3, num2 = 5;
var sum = num1 + num2;
document.write("<p>Sum of " + num1 + " and " + num2 + " is " + sum + "</p>");

// Q3: JS Mathematic Expressions
var myNum;
document.write("Value after variable declaration is: " + myNum + "<br>");
myNum = 5;
document.write("Initial value: " + myNum + "<br>");
myNum++;
document.write("Value after increment is: " + myNum + "<br>");
myNum = myNum + 7;
document.write("Value after addition is: " + myNum + "<br>");
myNum--;
document.write("Value after decrement is: " + myNum + "<br>");
var remainder = myNum % 3;
document.write("The remainder is: " + remainder + "<br>");

// Q4: Movie Tickets
var ticketPrice = 600;
var totalTickets = 5;
document.write("<p>Total cost to buy " + totalTickets + " tickets to a movie is " + (ticketPrice * totalTickets) + "PKR</p>");

// Q5: Multiplication Table
var tableNum = 4;
document.write("<h3>Table of " + tableNum + "</h3>");
for(var i = 1; i <= 10; i++){
    document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}

// Q7: Shopping Cart
var p1 = 650, p2 = 100, q1 = 3, q2 = 7, ship = 100;
var totalCart = (p1 * q1) + (p2 * q2) + ship;
document.write("<h3>Shopping Cart</h3>");
document.write("Price of item 1 is " + p1 + "<br>Quantity of item 1 is " + q1 + "<br>");
document.write("Price of item 2 is " + p2 + "<br>Quantity of item 2 is " + q2 + "<br>");
document.write("Shipping Charges " + ship + "<br><br>Total cost of your order is " + totalCart);

// Q8: Marks Sheet
var totalMarks = 980, marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("<h3>Marks Sheet</h3>Total marks: " + totalMarks + "<br>Marks obtained: " + marksObtained + "<br>Percentage: " + percentage + "%");

// Q9: Currency in PKR
var usDollars = 10, saudiRiyals = 25;
var totalPKR = (usDollars * 104.80) + (saudiRiyals * 28);
document.write("<h3>Currency in PKR</h3>Total Currency in PKR: " + totalPKR);

// Q11: Age Calculator
var currentYear = 2016, birthYearCalc = 1992;
document.write("<h3>Age Calculator</h3>Current Year: " + currentYear + "<br>Birth Year: " + birthYearCalc + "<br>Your Age is: " + (currentYear - birthYearCalc));

// Q12: The Geometrizer
var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * (radius * radius);
document.write("<h3>The Geometrizer</h3>Radius of a circle: " + radius + "<br>The circumference is: " + circumference + "<br>The area is: " + area);

// Q13: Lifetime Supply Calculator
var snack = "chocolate chip", currAge = 15, maxAge = 65, amountPerDay = 3;
var totalNeeded = (maxAge - currAge) * (amountPerDay * 365);
document.write("<h3>The Lifetime Supply Calculator</h3>Favorite Snack: " + snack + "<br>Current age: " + currAge + "<br>Estimated Maximum Age: " + maxAge + "<br>Amount of snacks per day: " + amountPerDay + "<br>You will need " + totalNeeded + " " + snack + " to last you until the ripe old age of " + maxAge);