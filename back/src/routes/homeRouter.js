const express = require("express");

/**
 * Importar los controladores para las rutas de inicio
 */
const {getHome, postHome} = require("../controllers/homeController");

/**
 * Crear un enrutador de Express para las rutas de inicio
 */
const homeRouter = express.Router();

/**
 * Definir las rutas GET y POST para la raíz "/"
 */
homeRouter.get("/", getHome);
homeRouter.post("/", postHome);

module.exports = homeRouter;
