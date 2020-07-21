let val = Number(prompt("Enter a number:"));


if (val < 0)
{
   val = val * -1;
}

let arr = [];

for (i=0;i<=val;i++)
{
   arr[i] = i; 
}


let oddnum = arr.filter(data =>data % 2 !== 0)

let cubeArray = oddnum.map(data => data ** 3);

console.log(oddnum);
console.log(cubeArray);

