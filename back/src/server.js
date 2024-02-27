// Importar express, libreria para Node.js
const express = require("express");
// Se importan los middlewares cors y morgan
const cors = require("cors");
const morgan = require("morgan");
// Importar el enrutador de películas desde el archivo routeMovies.js
const movieRouter = require("./routes/movieRouter");
const homeRouter = require("./routes/homeRouter");

// Crear instancia de la aplicaciones express
const app = express();


//* Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Usar el enrutador de películas para manejar las solicitudes con la ruta base '/movie
app.use("/movies", movieRouter);
// Enrutador de home para manejar las solcitudes con la ruta '/'
app.use("/", homeRouter);
// Exportar la funcion del controlador para utilizarlo en otro modulo
module.exports = app;