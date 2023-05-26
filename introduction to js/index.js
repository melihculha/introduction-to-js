// Introduction to Javascript

alert("Hello World!");

prompt("What is your name?");


// Data Types

typeof(23);
"number"

typeof("Melih");
"string"

typeof(true);
"boolean"


// JS Variables

var myName = ("Melih Çulha");
var yourName = prompt("What's your name?");
alert(" My name is " + myName + " , welcome to my profile " + yourName + "!" );

var yourNick = prompt("What is your nickname?");
var yourLvl = (90);
alert("Hello " + yourNick + " , your level is " + yourLvl + "!");


// JS Variable Exercise

function test() {
    var a = "3";
    var b = "8";
    
/*********** Do not change the code above *******/
//Write your code on lines 7 - 9:
var c = a;
a = b;
b = c;
/*********** Do not change the code below *******/

    console.log("a is " + a);
    console.log("b is " + b);
}

// String Concatenation Exercise

var myName = ("Melih")
var yourName = prompt("What is your name?")
alert("Hello " + yourName + " welcome! My name is " + myName + ".")

// Write your code below this line:

/* Hello Lizzie welcome! My name is Melih. */


// String Lengths and Retrieving the Number of Characters

var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.length;
alert("You have written " + tweetCount + " characters, you have " + (140 - tweetCount) + " characters remaining.");

// Slicing and Extracting Parts of a String

var name = "Angela";
name.slice (0,3);
"Ang" 

var tweet = prompt("Compose your tweet:");
var tweetUnder140 = tweet.slice(0,140);
alert(tweetUnder140);

alert(prompt("Compose your tweet:").slice(0,140));

// Changing Casing in Text

var name = "Lizzie";
name.toUpperCase();
"LIZZIE"

//To Save:
var name = "Lizzie";
name = name.toUpperCase();
"LIZZIE"

//Lower
name = name.toLowerCase();
"lizzie"


// Challenge: Changing String Casing Solution

//1 Create a var that stores the name that user enters via prompt.

var name = prompt("What's your name?");
"angela"
 
//2 Capitalise the first letter of their name.

//a isolate the first char

 var firstChar = name.slice(0,1);
 "a"

//b Turn the first char to upper case

var upperCaseFirstChar = firstChar.toUpperCase();
"A"

//c Isolate the rest of the name

var restOfName = name.slice(1,name.length);
"ngela"

//d Change the rest of the name to lower case

restOfName = restOfName.toLowerCase();

//e concactenate the first char with the rest of the char

var capitalisedName = upperCaseFirstChar + restOfName;
"Angela"

//3 We use the capitalised version of their name to greet them using an alert

alert("Hello " + capitalisedName);


// Basic Arithmetic and the Modulo Operator in Javascript

9%6;
"3"
11%5;
"1"
12%8;
"4"

// Challenge: Dog Age to Human Age Formula 

// Math Formula: humanAge = (dogAge - 2) x 4 + 21;

var dogAge = prompt("How old is your dog?");

var humanAge = ((dogAge - 2) * 4) + 21;

alert("Your dog is" + humanAge + " years old in human years.");

// Increment and Decrement Expressions 

var x = 5;
x = x + 1; //6

//Increment

x = x++; //6

//Decrement 

x = x--; //4 


// Creating and Calling Functions

// Creating Function

function getMilk() {
    alert("leaveHouse");
    alert("moveRight");
    alert("moveRight");
    alert("moveUp");
    alert("moveUp");
    alert("moveUp");
    alert("moveRight");
    alert("moveRight");
    alert("buyMilk");
    alert("moveLeft");
    alert("moveLeft");
    alert("moveDown");
    alert("moveDown");
    alert("moveDown");
    alert("moveDown");
    alert("moveLetrt");
    alert("moveLeftt");
    alert("enterHouse");
}

// Calling Function

getMilk();

// console.log

function getMilk() {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}

// Function Challenge The Karel Robot

// https://stanford.edu/~cpiech/karel/ide.html

// https://stanford.edu/~cpiech/karel/images/reference.png

function main() {
    beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
    beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
    beepersRight();
}

function goUpTurnRight() {
    turnRight();
    move();
    turnRight();
}

function goUpTurnLeft() {
    turnLeft();
    move();
    turnLeft();
}

function beepersRight() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
}

function beepersLeft() {
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
}
