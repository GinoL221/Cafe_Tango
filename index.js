const app = require("./source/app");

//variable de entorno
const PORT = process.env.PORT || 3033;

//Puerto en el que corre el servidor
app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en http://localhost:${PORT}`);
});
