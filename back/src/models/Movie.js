const mongoose = require("mongoose");

/**
 * Definir Schema de la pelicula
 */
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  year: {
    type: Number,
    required: true,
    min: [1895, `No hay peliculas previo a {VALUE}`],
    max: [2024],
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  genre: [String],

  rate: {
    type: Number,
    required: true,
  },
  poster: {
    type: String,
    validate: {
      validator: function (input) {
        return input.includes("https://");
      },
      message: (props) => `${props.value} No es una url valida para el poster`,
    },
    required: true,
  },
});

/**
 * Definir el modelo Movie basado en el esquema, MovieSchema
 */
const Movie = mongoose.model("Movie", movieSchema);

/**
 * Exportar Modelo Movie
 */
module.exports = Movie;