const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => allCountry(data))
}

const allCountry =(countries) =>{
    const divContainer = document.getElementById('country-container');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML=`
        <img class="flag" src="${country.flags.png}" alt="" />
        <h3>Name: ${country.name.common}</h3>
        <h4>City: ${country.capital? country.capital : 'No Capital'}</h4>
        <button onclick="loadCountryDetails('${country.cca2}')" >Details</button>
        `;
        divContainer.appendChild(div)
    });
}

const loadCountryDetails = (code) =>{
    // console.log(code);

    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountry(data[0]))

}

const displayCountry = country =>{
    const countryDetails = document.getElementById('country-details')
    console.log(country);
    // const div = document.createElement('div');
    countryDetails.innerHTML =`
    <h1>Country Name: ${country.name.common}</h1>
    <h2>Official Name: ${country.name.official}</h2>
    <h5>coatOfArms</h5>
    <img src="${country.flags.png}" alt="coatOfArms" />
    `;

    // countryDetails.appendChild(div)
}
loadCountries();