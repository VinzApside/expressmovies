const express = require("express");
const app = express();

const port = 3000;

app.get("/movies", (req, res) => {
  res.send("bientôt une liste de film ici !");
});

app.get("/movies/add", (req, res) => {
  res.send("route add");
});

app.get("/movies/:id", (req, res) => {
  const id = req.params.id;
  res.send(`vous regardez le film numéro ${id}`);
});

app.get("/", (req, res) => {
  res.send("hello world !");
});

app.listen(port, () => {
  console.log(`listen on the port ${port}`);
});
