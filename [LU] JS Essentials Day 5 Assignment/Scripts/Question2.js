class User {
    constructor(name,age,email){
        this.name =name,
        this.age =age,
        this.email = email;
        this.coins = 1;
        this.course = [];
    }

    login = () => {
        console.log(`User ${this.name} has logged in`);
   }

   logout = () => {
        console.log(`User ${this.name} has logged out`);
   }
}

class Moderator extends User {
    addCoins = () => {
       this.coins++;
       console.log(`${this.name} has ${this.coins} coins`)
    }
    subCoins = () => {
        this.coins--;
        console.log(`${this.name} has ${this.coins} coins remaining`)
     }
}

class Admin extends Moderator{
    addCourse = (user,courses) => {
        this.course.push(courses);
        console.log(user);
    }
}

let person = [{
    name: "Hemanth",
    age: 23,
    email: "hem@gmail.com",
    coin: this.coins,
    courses: this.course
},
{
name: "Mohan",
age: 21,
email: "mohan@gmail.com",
coin: this.coins,
courses: this.course
},
{
    name: "Venky",
    age: 25,
    email: "venky@gmail.com",
    coin: this.coins,
    courses: this.course
},
{
    name: "Vimal",
    age: 20,
    email: "vimal@gmail.com",
    coin: this.coins,
    courses: this.course
}
]


let user1 = new User(person[0].name,person[0].age,person[0].email)
let user2 = new User(person[1].name,person[1].age,person[1].email)
let user3 = new Moderator(person[2].name,person[2].age,person[2].email,person[2].coin)

let user4 = new Admin(person[3].name,person[3].age,person[3].email,person[3].coin,person[3].courses)

let user5 = new Admin(person[1].name,person[1].age,person[1].email,person[1].coin,person[1].courses)


user1.login();
user2.login();
user3.addCoins();
user3.subCoins();
user4.login();
user4.addCoins();
user4.addCoins();
user4.subCoins();
user4.addCourse(user4,"python");
user4.addCourse(user4,"JavaScript");
user5.addCourse(user5,"python");
user5.addCourse(user5,"JavaScript");
user4.logout();
console.log(user5.course)








