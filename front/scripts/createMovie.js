const axios = require("axios");

/**
 * Función para validar el formulario
 */
function validateForm({ title, year, director, duration, genre, rate, poster }) {
    if(!title || !year || !director || !duration || !genre[0] || !rate || !poster)
        return "Todos los campos son obligatorios";
    if(isNaN(year) < 1895 || year > 2024)
        return "Año Invalido";
    if(director.length < 5 || director.length > 50)
        return "El nombre del director debe contener entre 5 y 50 caracteres";
    if(isNaN(rate) || rate < 1 || rate > 10)
        return "El Rate debe ser entre 1 y 10";
    if(!poster.includes("https://"))
        return "El poster debe contener una url";
    return null;
}
/**
 * Funcion para crear una nueva Película, obteniendo los datos desde el formulario en front.
 * Crear un objeto con los datos de la nueva Película.
 * Realizar una petición POST para agregar la nueva película a la base de datos
 */
function createMovie () {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;
    const director = document.getElementById('director').value;
    const duration = document.getElementById('duration').value;
    const genre = document.getElementById('genre').value.split(" ");
    const rate = document.getElementById('rate').value;
    const poster = document.getElementById('poster').value;


    const newMovie = {title, year, director, duration, genre, rate, poster}

    const error = validateForm(newMovie);
    if(error) return alert(error);
    axios
        .post("http://localhost:3000/movies", newMovie)
        .then(() => alert("Pelicula Creada Exitosamente"))
        .catch((error) => alert("Error al crear la pelicula", error.message));
}


module.exports = createMovie;