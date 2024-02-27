/**
 * Requerir el modulo createMovie.js para crear una nueva película - renderCards.js para generar las card
 */
const createMovie = require("./createMovie.js");
const cardGenerator = require("./renderCards.js");
// Requerir axios para hacer peticiones HTTP
const axios = require("axios");
// URL Servidor de la API de peliculas
const URL = "http://localhost:3000/movies";

/**
 * Obtener las películas desde el servidor para renderizar, 
 * Mostrar un mensaje en caso de error
 */
const getMovies = async () => {
  try {
    const {data} = await axios.get(URL);
    data.map((movie) => cardGenerator(movie));
  } catch ({ message }) {
    alert(message);
  }
}
/**
 * Ejecutar la funcion getMovies cuando el DOM este cargado, Obtener el formulario de las peliculas
 * Y agregar un eventListener al evento submit del formulario
 */
document.addEventListener("DOMContentLoaded", () => {
  getMovies();
  const submit = document.getElementById("movieForm");
  submit?.addEventListener("submit", createMovie);
})

console.log("Conectado con back");