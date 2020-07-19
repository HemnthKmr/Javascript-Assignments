/* 
You are managing a sales department for your company, you want to reward your employees based on
the sales made by them during the year.
The criteria is as follows:
1. Sales from 0-5000 : 2%
2. Sales from 5001 - 10000 : 5%
3. Sales from 10001 - 20000 : 7%
4. Above 20000 - 10%
Then log the total commission earned by him
*/

const employees = [{
    name: "Mohan",
    id: 1,
    salary: 20000,
    sales: 3000,
    reward: []
},
{
    name: "Hemanth",
    id: 2,
    salary: 10000,
    sales: 7000,
    reward: []
},
{
    name: "Venky",
    id: 3,
    salary: 30000,
    sales: 17000,
    reward: []
},
{
    name: "Vimal",
    id: 4,
    salary: 60000,
    sales: 40000,
    reward: []
}
]

// const { name, id, salary, sales, reward } = employees;

for (i = 0; i < employees.length; i++) {
    if (employees[i].sales >= 0 && employees[i].sales <= 5000) {
        employees[i].reward = employees[i].salary * (2 / 100);
    }

    else if (employees[i].sales > 5000 && employees[i].sales <= 10000) {
        employees[i].reward = employees[i].salary * (5 / 100);
    }

    else if (employees[i].sales > 10000 && employees[i].sales <= 20000) {
        employees[i].reward = employees[i].salary * (7 / 100);
    }

    else if (employees[i].sales > 20000) {
        employees[i].reward = employees[i].salary * (10 / 100);
    }
    console.log(`The commission earned by ${employees[i].name} for this year is Rs: ${employees[i].reward}`);
}


