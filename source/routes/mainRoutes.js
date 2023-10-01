const express = require("express");
const path = require("path");
const multer = require("multer");

const router = express.Router();

router.get("/", (req, res) => {
  const ruta = path.join(__dirname, "../views/index");
  res.render(ruta);
});

module.exports = router;
