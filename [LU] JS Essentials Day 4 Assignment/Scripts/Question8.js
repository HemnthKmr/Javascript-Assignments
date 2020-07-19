// Replace Function Expressions with arrow functions in the code below:

// function ask(question,yes,no)
// {
//     if(confirm(question)) yes()
//     else no();
// }

// Arrow functions

ask = (question,yes,no) => {
    if(confirm(question)) yes()
    else no();
}

ask ("Do you agree?",
    function() {alert("You agreed.");},
    function() {alert("You cancelled the execution.");}
);


