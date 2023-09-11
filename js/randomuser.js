console.log('connect random user');

const loadUser = () =>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => allUser(data.results))
}

const allUser = (users) =>{
    const userDiv = document.getElementById('users');
    for( let user of users){
        console.log(user);
        const div = document.createElement('div');
        div.innerHTML = `
        <h2>Name: ${user.name.first} ${user.name.last}</h2>
        <h4>Location: Country--${user.location.country}, City--${user.location.city}</h4>
        `;
        userDiv.appendChild(div)
    }
}

loadUser();