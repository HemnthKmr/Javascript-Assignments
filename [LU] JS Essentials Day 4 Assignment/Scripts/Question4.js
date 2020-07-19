// Make a Calculator in Javascript which can do operations as Addtion, Subtraction, Multiplication, Division,
// Square root, Percentage

let inp1 = Number(prompt ("Enter any one number from options: 1.Add 2.Subtract 3.Multiply 4.Divide 5.SquareRoot 6.Percentage"));

while(inp1 <= 0 || inp1 > 6)
{
    inp1 = Number(prompt ("Enter any one number from options: 1.Add 2.Subtract 3.Multiply 4.Divide 5.SquareRoot 6.Percentage"));
}

let input = () => {
    input1 = Number(prompt("Enter your first number:"));
    input2 = Number(prompt("Enter your second number:"));
    return input1,input2;
}


let inp = () => {
    input1 = Number(prompt("Enter your number:")); 
    return input1;
}

const add = () => {
    input();
    addition = input1 + input2;
    console.log(`Addition of ${input1} and ${input2} is ${addition}`);
}

if(inp1 == 1){
    add(); 
}


const sub = () => {
    input();
    subtraction = input1 - input2;
    console.log(`Subtraction of ${input1} and ${input2} is ${subtraction}`);
}

if(inp1 == 2){
    sub();
}



const mul = () => {
    input();
    multiplication = input1 * input2;
    console.log(`Multiplication of ${input1} and ${input2} is ${multiplication}`);
}

if(inp1 == 3){
mul();
}

const div = () => {
    input();
    division = input1 / input2;
    console.log(`Division of ${input1} and ${input2} is ${division}`);
}
if(inp1 == 4){
    div();
    }


const sqrt = () => {
    inp();
    squareroot = Math.sqrt(input1);
    console.log(`Square Root of ${input1} is ${squareroot}`)
}
if(inp1 == 5){
    sqrt();
}


const per = () => {
    input();
    avg = ((input1 + input2)/ 2);
    console.log(`Percentage of two numbers ${input1} and ${input2} is ${avg}%`);
}
if(inp1 == 6){
    per();
}

