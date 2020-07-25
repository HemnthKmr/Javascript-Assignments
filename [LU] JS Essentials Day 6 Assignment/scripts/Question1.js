// Comment Question 3 for Question 1 to run.

let i =0;


setInterval( function backgroundChange(){
    colors = ["red","yellow","green","blue"];
    document.body.style.backgroundColor = `${colors[i]}`;

    if ( i < colors.length){
        i = i + 1;
    }
    if(i > colors.length - 1)
    {
        i = 0;
    }
}, 5000);

    



