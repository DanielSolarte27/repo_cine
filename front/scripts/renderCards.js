/**
 * Crear una constante para obtener el contenedor de las tarjetas de las peliculas
 */
const cardContainer = document.getElementById("cards-container");

/**
 * Funcion para crear una card de peliculas y agregarlas al contenedor cards-container
 */
function cardGenerator({ title, year, director, duration, genre, rate, poster }) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "my-card","m-3");
    cardDiv.innerHTML = `
        <h3><a href = "porDefinir">${title}</a></h3>
        <h4>Año: ${year}</h4>
        <h4>Director: ${director}</h4>
        <h4>Duración: ${duration}</h4>
        <h4>Género: ${genre.join(" - ")}</h4>
        <h4>Rating: ${rate}</h4>
        <img src = "${poster}" alt = "${title}"/>
    `
    cardContainer?.appendChild(cardDiv);
}
/**
 * Exportar funcion para utilizarla en otro modulo
 */
module.exports = cardGenerator;