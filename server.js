const express = require('express');
const app = express();

app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  const name = req.query.name || "Guest";
  const fullUrl = req.protocol + "://" + req.get('host') + req.originalUrl;

  res.json({
    message: "Request handled successfully",
    userId: id,
    userName: name,
    url: fullUrl
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
