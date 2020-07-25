//Comment Question1 and Question2 for Question 3 to run.

// Welcome Message

let input = prompt("Enter your name:");


let change = document.getElementById('home');

change.innerHTML = `Hi ${input}, Welcome to our page`;

// Clock
const ctime = document.getElementById('time');

function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

setInterval(clock,1000);

// DarkMode

let darkmode = document.getElementById('Dark');
let darkmode1 = document.getElementById('Darkbut');

darkmode1.onclick = DarkMode = () => {
    if (darkmode.getAttribute('Dark') != "black")
    {
        darkmode.classList.toggle('Darkmodeon');   
    }
    else{
        darkmode.classList.toggle('Darkmodeoff');
    }
    
}






