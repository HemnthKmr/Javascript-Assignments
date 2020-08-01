
  document.getElementById('button').onclick = generate = () =>
{
    debugger;
    let count = parseInt(Math.random() * 1001);
    
    fetch('https://type.fit/api/quotes')
    .then(response =>  response.json())
    .then(data => {
      // if (data[count].author == 'null'){
      //   data[count].author = "Anonymous";
      // }
      document.getElementById('quote').innerHTML = `"${data[count].text}" <br><br> - ${data[count].author}`;
    })   
    }  
//setTimeout(quotebgcolor,300) 


//     quotebgcolor = () =>  {
//     let x = parseInt(Math.random() * 256);
//     let y = parseInt(Math.random() * 256);
//     let z = parseInt(Math.random() * 256);
//     let bgcolor = `rgb(${x},${y},${z})`;
//     document.getElementById('quote').style.color = bgcolor; 
// }

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

