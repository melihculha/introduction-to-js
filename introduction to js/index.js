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
