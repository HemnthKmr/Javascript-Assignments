// Destructure the following object

const student = {
    name: "Helsinki",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}


// Destructured Object

const {name,age,projects:{diceGame}} = student;
console.log(name,age,diceGame);