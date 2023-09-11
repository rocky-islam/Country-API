const userApi = () =>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => userData(data))
}

const userData = (datas) =>{
    let getDiv = document.getElementById('user-content');
    for(let data of datas){
        console.log(data);
        const createDiv = document.createElement('div');

        createDiv.innerHTML = `
        <h2>Name: ${data.name}</h2>
        <h4>Email: ${data.email}</h4>
        <p>Address: City-${data.address.city}, street-${data.address.street}</p>
        
        `
        getDiv.appendChild(createDiv);
    }
}

userApi();