class User {
    constructor(name,age,email){
        this.name =name,
        this.age =age,
        this.email = email;
    }

    login = () => {
        console.log(`User ${this.name} has logged in`);
   }

   logout = () => {
        console.log(`User ${this.name} has logged out`);

   }
}


let person = [{
    name: "Hemanth",
    age: 23,
    email: "hem@gmail.com",
},
{
name: "Mohan",
age: 21,
email: "mohan@gmail.com",
},
{
    name: "Venky",
    age: 25,
    email: "venky@gmail.com",
}
]

let user1 = new User(person[0].name,person[0].age,person[0].email)
let user2 = new User(person[1].name,person[1].age,person[1].email)

user1.login();
user2.login();



class Moderator extends User {
    constructor(name,age,email,coins){
        this.name =name,
        this.age =age,
        this.email = email;
        this.coins = coins;
    }

    AddCoins = () => {
       this.coins++;
       console.log(`${this.name} has ${this.coins} coins`)
    }
}

user1.AddCoins();
user2.AddCoins();


