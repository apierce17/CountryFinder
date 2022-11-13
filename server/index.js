// import dependancies
const express = require('express');

// create new express app
const app = express();

// server configuration
const PORT = 3001;

// create /countries endpoint
app.get('/countries', async (req, res) => {
    res.send('Countries endpoint')
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});