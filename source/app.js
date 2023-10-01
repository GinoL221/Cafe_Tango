const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const path = require("path");

const mainRoutes = require("./routes/mainRoutes.js");
const userRoutes = require("./routes/usersRoutes.js");
const productsRoutes = require("./routes/productsRoutes.js");

const app = express();

app.use(morgan("dev"));
app.set("view engine", "ejs");

//manejar data desde un formulario HTML
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Reconoce put o delete
app.use(methodOverride("_method"));

//Direccion de archivos publicos
const publicPath = path.resolve(__dirname, "/public");
app.use(express.static(publicPath));

app.use(mainRoutes);
app.use(userRoutes);
app.use(productsRoutes);

//Ruta 404
app.use((req, res, next) => {
  const ruta = path.join(__dirname, "./views/404NotFound.ejs");
  res.status(404).render(ruta, { message: "Dirección no encontrada" });
});

module.exports = app;
