//promises

for (i=1;i<50;i++)
{
    let prom = new Promise(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
        .then(response => response.json())
        .then(data => console.log(data))
    })
}


//Async Await


for (i=1;i<500;i++)
{
    async function todo(){
          let prom = new Promise(() => {
              
              setTimeout(() =>{
                fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
                .then(response => response.json())
                .then(data => console.log(data))
              },5000)            
        })
        let result = await prom;
        console.log(result);
    }
    todo();
}


    
// fetch

for (i=1;i<50;i++)
{
    fetch(`https://jsonplaceholder.typicode.com/todos/${i}`)
    .then(response => response.json())
    .then(data=> console.log(data))
}
