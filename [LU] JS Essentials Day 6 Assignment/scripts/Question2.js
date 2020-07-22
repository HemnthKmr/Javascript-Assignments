
let val = Number(prompt("Enter a number:"));
let count = Number(prompt("Enter the number of iterations needed:"));

for(i=1;i<=count;i++)
{
    list = document.querySelector('#list');
    mul = val * i;
    list.innerHTML += `<p> ${val} * ${i} = ${mul} </p>`
}

