
let val = Number(prompt("Enter a number:"));
let count = Number(prompt("Enter the number of iterations needed:"));

list = document.querySelector('#list');

for(i=1;i<=count;i++)
{
    mul = val * i;
    list.innerHTML += `<p> ${val} * ${i} = ${mul} </p>`
}

