const express = require("express");
const app = express();

const port = 3000;

//on déclare où sont nos views
app.set("views", "./views");

//on déclare le view engine
app.set("view engine", "ejs");

//middleware pour utiliser des fichiers statiques dans le dossier public
app.use("/public", express.static("public"));

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
  res.render("index");
});

app.listen(port, () => {
  console.log(`listen on the port ${port}`);
});
