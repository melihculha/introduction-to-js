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
