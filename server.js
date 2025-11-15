const express = require('express');
const app = express();
const port = 3000;

// 1) Simple Route
app.get('/', (req, res) => {
  res.send("Welcome! This is the Home Route.");
});

// 2) Handling Route Parameters
// URL: http://localhost:3000/user/sudha
app.get('/user/:name', (req, res) => {
  const username = req.params.name;
  res.send(`Hello ${username}, this is Route Parameter Example!`);
});

// 3) Handling Query Parameters
// URL: http://localhost:3000/search?item=phone&price=20000
app.get('/search', (req, res) => {
  const item = req.query.item;
  const price = req.query.price;
  res.send(`You searched for ${item} with price ${price}`);
});

// 4) URL Building Example
app.get('/build-url', (req, res) => {
  const url = req.protocol + '://' + req.get('host') + '/user/sudha';
  res.send(`Example URL Built: ${url}`);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
