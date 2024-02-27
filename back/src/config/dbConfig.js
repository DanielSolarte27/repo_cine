// Hacer conexion de base datos en una funcion,
// exportar la funcion

const mongoose = require("mongoose");
require("dotenv").config();

// Crear funcion para conectarnos a la BBDD
const dbConfig = async () => {
    //* Hacer la conexion a la BBDD con la Url de MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
}

module.exports = dbConfig;