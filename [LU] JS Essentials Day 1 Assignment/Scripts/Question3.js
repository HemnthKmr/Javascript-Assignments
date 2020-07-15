// Different types of DataTypes.

 
// JavaScript Variables are dynamic in nature which means they can hold different datatypes

/*
    String
    Boolean
    Number
    undefined
    Null
    Objects
    Array
*/

// String  - String is defined as a string of characters.

var a = 'Iam a Lion'    // using single quotes
var b = "Iam a Tiger"   // using double quotes
 c = "Iam a 'Rat'"   // using single quotes within double quotes
 d = 'Iam a "Killer"' // using double quotes within single quotes

console.log(a);
console.log(b);
console.log(c);
console.log(d);

//Boolean   - This datatype can have only 2 values (true or false)

var g = 20;
var h = 10;
g == h;
var h = 20;
g == h

var x = true;    
var y = false;


//Number - Number can be written in two ways. With decimel or without decimal.
 
var num = 10;       // without decimal
var num1 = 2.56;   // with decimal
console.log(num);
console.log(num1);

 //Arrays - Array can store multiple values in a single variable but of the same datatype.

 var array = ["Apple","Kiwi","Jackfruit","Watermelon"];
 console.log(array);

 //Objects - An Object is a collection of multiple values of different datatypes.

 var Obj = {
     name : "Hemanth",
     id : 1,
     email : "hem@gmail.com",
 }
console.log(Obj);


//undefined  -  if a variable is declared but not assigned a value.

var l;
console.log(l);

// null   -  Null in javascript means nothing but the datatype of null is object.

Obj = null;
console.log(null);


