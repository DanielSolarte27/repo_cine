/**
 * Controlador para manejar la solicitud GET de la aplicación de películas.
 */
const getHome = (req, res) => {
    res
        .status(200)
        .send("Estas en la ruta '/' de Movies App.");
};
/**
 * Controlador para manejar la solicitud POST de la aplicación de películas.
 */
const postHome = (req, res) => {
    res
        .status(200)
        .send("Estas en la ruta POST en la ruta '/' de Movies App.");
};
/**
 * Exportar los controladores
 */
module.exports = {getHome, postHome};