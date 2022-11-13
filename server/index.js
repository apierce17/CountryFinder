// import dependancies
const express = require('express');
const fetch = require('node-fetch');
var cors = require('cors');

// create new express app
const app = express();

// server configuration
const PORT = 3001;
app.use(cors())

// Get list of countries
const fetchCountries = async (term) => {
    const response = await fetch(
        `https://restcountries.com/v2/all`
    );
    const data = await response.json();

    // If search term is supplied check if it matches
    if (term != undefined) {
        let countries = []
        data.forEach(country => {
            if (country.name === term) { // Check if term matches country name
                countries.push(country)
            } else if (country.capital === term) { // Else check if term matches country capital name
                countries.push(country)
            } else { // If term doesn't match capital or country names check if term matches in languages
                country.languages.map(language => {
                    if (Object.values(language).includes(term)) {
                        countries.push(country)
                    }
                })
            }
        })

        // If countries array is not empty return matching countries, otherwise return error 
        return countries.length === 0 ? { 'status': 404, 'message': 'no results' } : countries;
    } else { 
        // If no search term is supplied return all countries
        return data;
    }
};

// create /countries endpoint
app.get('/countries', async (req, res) => {
    const term = await req.query.term; // Listen for search term
    res.status(200).json(await fetchCountries(term));
});

// make the server listen to requests
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});