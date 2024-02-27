/**
 * Requerir el modelo
 */
const Movie = require("../models/Movie.js");

/**
 * Obtener todas las peliculas de la base de datos
 */
module.exports = {
  getMovieService: async () => {
    const allMovies = await Movie.find();
    return allMovies;
  },
  /**
   * Crear nueva pelicula en la base de datos
   */
  postMovieService: async (movie) => {
    const newMovie = new Movie(movie);
    const savedMovie = await newMovie.save();
    return savedMovie;
  },
};