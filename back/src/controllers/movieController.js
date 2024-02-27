// Controlador para manejar solicitudes de movies

const {getMovieService, postMovieService } = require("../services/movieService.js");

module.exports = {
  getMovieController: async (req, res) => {
    try {
      const movies = await getMovieService();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({
        message: "Error al obtener los datos",
        error: error.message,
      });
    }
  },
/**
 * Controlador para manejar la solicitud POST  
 */
  postMovieController: async (req, res) => {
    try {
      const { title, year, director, duration, genre, rate, poster} = req.body;
      const createdMovie = await postMovieService({title, year, director, duration, genre, rate, poster});
      res.status(201).json(createdMovie);
    } catch (error) {
      res.status(500).json({ message: error.message});
    }
  },

  putMovieController: (req, res) => {},
  deleteMovieController: (req, res) => {},
};