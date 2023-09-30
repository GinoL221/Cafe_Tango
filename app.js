const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "/public");
app.use(express.static(publicPath));

app.listen(3031, () => {
  console.log("El servidor esta corriendo en http://localhost:3031");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.get("/cart", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/shopping_cart.html"));
});
