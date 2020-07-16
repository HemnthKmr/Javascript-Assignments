// Javascript String Methods

// charCodeAt()  - Returns the Unicode character of specified index in the string.

let str = "Welcome to Hidden Leaf";
let n   = str.charCodeAt(3);
console.log(n);

// fromCharCode() - Converts Unicode values to respective character
let m = String.fromCharCode(99);
console.log(m);


// concat() - Adds two or more strings and returns a new string.

let str1 = "Iam Naruto Uzumaki";
let str2 = "Iam not going back, thats my Ninja way";
let concat = str.concat(",",str1,",",str2);
console.log(concat);

// includes()  - Searches for a string value in a string and returns true or false.

let include = str.includes("Hidden");
let include1 = str.includes("Naruto");
console.log(include);
console.log(include1);

//substring()  - Returns a new string from within that string using 2 index values provided.

let substr = str1.substring(4,10);
let substr1 = str1.substring(4);      // if no end value is provided then it displays all the string values from index 4.
console.log(substr);
console.log(substr1);


//slice()  - Extracts a part of the string and returns it as a new string.

let slice = str1.slice(4,10);
console.log(slice);

//substr()  - Extarcts the part of a string , beginning at character at a specified position and returns the specified number of characters. This method will not affect the original string.

let substr2 = str1.substr(4,6);
console.log(substr2);

// search()  - Finds the string if present and returns the starting index value.If no match found it returns -1.

let srch = str1.search("Naruto");
console.log(srch);
let srch1 = str1.search("Itachi");
console.log(srch1);

// replace() - Finds a string if present and replaces that string with a new value provided.

let rep = str1.replace("Naruto Uzumaki","Itachi Uchiha");
console.log(rep);



// JavaScript Array Methods


//concat()    -  Combines 2 arrays and output into single array.

let arr = ["apple","mango"];
let arr1 = ["pineapple"];

let arrcat = arr.concat(arr1);
console.log(arrcat);

//copyWithin()  - Copy a array element from one position to another within that array.

let arrcopy = arr.copyWithin(1,0);        // (target, start ,end) - hint
console.log(arrcopy);

// fill()    -  fills a new value to the array 

let fill = arrcat.fill("Kurama",0,2);    // (fill value,start ,end)
console.log(fill);

//foreach()  -  Calls a function once for each element in array.

myFunction = (arrcat) => {
 console.log(arrcat)
}

let foreach = arrcat.forEach(myFunction);

//map()  - calls a function once for each element in array and returns a new array.

let arr3 = [4,9,16,25,36,49,64];

let sqrrt = arr3.map(Math.sqrt);

console.log(sqrrt);

// sort() - sorts the array in ascending or descending order.

let sort = arr3.sort(
    compare = (val1,val2) => {        //ascending
        return val1 - val2;
    }
);
console.log(sort);

let sort1 = arr3.sort(
    compare = (val1,val2) => {        //descending
        return val2 - val1;
    }
);
console.log(sort1);