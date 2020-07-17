// Get number from user and print whether the number is odd or even in console.

let var1 = prompt("Please Enter a number:", 0);

oddeven = () => {
    diff = (var1 % 2 == 0) ? "even" : "odd";
}

while (var1 == '') {
    var1 = prompt("Please Enter a number:", 0);
}

oddeven();
console.log(`The number entered is ${var1} and Number is ${diff}`);







