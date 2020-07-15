// Difference between var, let, const

/*
var is used to declare a variable of any datatype available. It is global scoped or function-scoped. i.e. If a variable is declared within a function block that variable will be accessible only inside the function and not outside the scope of function.
var variables can be updated and re-declared within its scope.

let is also used to declare a variable of any datatype available. It is block-scoped. i.e. If a variable is decalred within a
block of javascript code, they can be accessed within that block and not outside of it.
let variables can be updated within its scope but cant be re-declared within its scope.

const also is used to declare a variable of any datatype avaialble. It is also block-scoped similar to let and the varibales can be accessed within the block of code and not outside that.
const variables cannot be updated or re-declared.

const variables should be assigned to a value at the time of declaration whereas let and var can be declared without a value assigned during declaration.

*/


// var example
var a;
var a = 10;
var b = 11;
function test()
{
    var a = 6;
    var a = 7;
    console.log(a);
}

if(a<b) 
{

 var b = 15;       
 
}
console.log(b);
test();
var a = 15;
console.log(a);




// let example
let c;
c = 10;
let d = 25;

function test1()
{
    let c = 11;
    c = 13;
    console.log(c);
}

if (c < d)
{
    let c = 20;
  console.log(c);
}

test1();
// c = 15;
console.log(c);



// const example

// const e
const e = 50;
const f = 100;
// e = 100;

function test2()
{
    const e = 11;
    console.log(c);
}

if ( e < f)
{
    const e = 200;
    console.log(e);
}

console.log(e);




