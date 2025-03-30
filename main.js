fetch('https://jsonplaceholder.typicode.com/posts')
.then((res)=>res.json())
.then((data)=>data.forEach(element => {
    let container=document.createElement('div');
    container.classList.add('post');
    document.body.appendChild(container);
    container.innerHTML=`
    <h2>${element.title}</h2>
    <p>${element.body}</p>
    `
}))
.catch(()=>{let errorMessage=document.createElement('p');
            document.body.appendChild(errorMessage);
            errorMessage.textContent='Ооу, что-то пошло не так :('})