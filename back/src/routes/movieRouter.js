// Importar express, libreria para Node.js
const express = require("express");
// Importar el controlador de movies
const {getMovieController, postMovieController} = require("../controllers/movieController");
// Crear el enrutador 
const movieRouter = express.Router();

// Definir la ruta GET en el enrutador para manejar las solicitudes
movieRouter.get("/", getMovieController);
movieRouter.post("/", postMovieController);

// Exportar la funcion del router para utilizarlo en otro modulo
module.exports = movieRouter;