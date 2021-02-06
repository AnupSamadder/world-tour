fetch("https://restcountries.eu/rest/v2/all")
.then( res => res.json())
.then (data => displyCountries(data))

const displyCountries = countries =>{
    const countriesDiv = document.getElementById("countries");
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        
        const countryDiv = document.createElement('div');
        countryDiv.className = "country"
        const countryInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p class="capital-name">${country.capital}</p>
        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    }
}