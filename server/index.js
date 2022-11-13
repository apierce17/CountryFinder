// import dependancies
const express = require('express');
const fetch = require('node-fetch');

// create new express app
const app = express();

// server configuration
const PORT = 3001;

// Get list of countries
const fetchCountries = async () => {
    const response = await fetch(
      `https://restcountries.com/v2/all`
    );
    const data = await response.json();
    return data;
};

// create /countries endpoint
app.get('/countries', async (req, res) => {
    res.status(200).json(await fetchCountries());
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});