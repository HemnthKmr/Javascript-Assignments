// Console Function

/*
 Console Object is used to display all the output in the developer console provided by the browser.

 There are multiple methods in Console which are as follows:

 1) console.log()
 2) console.error()
 3) console.warn()
 4) console.time()
 5) console.timeEnd()
 6) comsole.table()
 7) console.clear()
 8) console.count()
 9) console.info()
 10) console.assert()
 11) console.group()
 12) console.groupCollapsed()
 13) console.groupEnd()
 14) console.trace()
 15) console.countReset()
 16) console.timeLog()
*/


// Examples of few console nethods.

// console.log()  - this method is used to display some sort of message in the console.
console.log("I am console.log");

// console.error() - This method displays an error message in the console.
console.error("Ooops..Something went wrong");

// console.warn()  - This method displays an warning message in the console.
console.warn("I am gonna turn Off , plug-in your charger!!");

//console.clear()  - This method when called will clear the console.
console.clear();

// console.time(), console.timeLog(), console.timeEnd()   - These methods are used to calculate the time of execution of statements wrapped within them. where time() is the start and timeEnd() is the End and timeLog() is used to log a specific time of execution of a statement between start and end.
console.time("timeTaken");
console.log("Iam lazy");
console.timeLog("timeTaken");
console.log("Iam too lazy");
console.log('Iam much more lazy');
console.timeEnd("timeTaken");

// console.table()  - This method is used to display the result in table format.
console.table(["Hemanth","I love Coding","Big Fan of Naruto"]);

//console.count() - This method when ran displays the output of number times it has been called.
console.count("1st Call");  
console.count("2nd Call");

//console.countReset() - This method resets the count label value to 0. If there is no label set then it resets the default label.
console.countReset("1st Call");
console.count("1st Call");
console.count("2nd Call");    // Recalling the count() method to check if it is resetted or not




