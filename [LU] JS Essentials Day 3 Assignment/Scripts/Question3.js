// Write a program to take marks as input from user and grade him accordingly. Use Conditional statements.Also the same code using ternary or switch.
// debugger;
let mark = [];
let total = 0;
mark[0] = Number(prompt("Enter your english mark:"));
while (mark[0] > 100) {
    alert("Enter mark below 100");
    mark[0] = Number(prompt("Enter your english mark:"));
}

mark[1] = Number(prompt("Enter your maths mark"));
while (mark[1] > 100) {
    alert("Enter mark below 100");
    mark[1] = Number(prompt("Enter your maths mark:"));
}

mark[2] = Number(prompt("Enter your science mark"));
while (mark[2] > 100) {
    alert("Enter mark below 100");
    mark[2] = Number(prompt("Enter your science mark:"));
}

mark[3] = Number(prompt("Enter your Computer Science mark"));
while (mark[3] > 100) {
    alert("Enter mark below 100");
    mark[3] = Number(prompt("Enter your Computer Science mark:"));
}

function add(item) {
    total += item;
}

mark.forEach(add);

let per = total / mark.length

// Ternary Operator

let grade = (per >= 90 && per <= 100) ? "A grade" :
    (per >= 70 && per < 90) ? "B grade" :
        (per >= 40 && per < 70) ? "C grade" :
            "D grade";

console.log(`The total mark in ${mark.length} subjects is ${total} and grade is ${grade}`);

// if else..if

if (per >= 90 && per <= 100) {
    grad = "A grade";
} else if (per >= 70 && per < 90) {
    grad = "B grade";
} else if (per >= 40 && per < 70) {
    grad = "C grade";
} else {
    grad = "D grade";
}

console.log(`The total mark in ${mark.length} subjects is ${total} and grade is ${grad}`)













