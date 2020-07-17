//Write a program which will take OS name and version from the user seperated by a space.Then log the OS name and version to console.

// debugger;
sepwords = () => {
    return splt = var2.split(" ");                
}

let var2 = prompt("Enter your OS and version of OS seperately with a space between them:");


sepwords();

// while (splt[0].filter == "" && splt[1].filter == "") {
//     alert("Invalid entry 'An empty Space'. Enter input again!")
//     var2 = prompt("Enter your OS and version of OS seperately with a space between them:");
//     sepwords();
// }

while (splt.length < 2 || splt.length > 2 ) {

    while (!var2) {
        alert("No input value entered..! Enter value again.");
        var2 = prompt("Enter your OS and version of OS seperately with a space between them:");
        sepwords();
    }
    while (splt.length > 2) {
        alert("OS and version is entered with more spaces");
        var2 = prompt("Enter your OS and version of OS seperately with a space between them:");
        sepwords();
    }
    while (splt.length < 2) {
        alert("OS and version is entered without a Space");
        var2 = prompt("Enter your OS and version of OS seperately with a space between them:");
        sepwords(); 
    } 
}

console.log(`The OS name is ${splt[0]} and version is ${splt[1]}`);