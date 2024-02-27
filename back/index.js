// Importar el modulo app desde el archivo server
const dbConfig = require("./src/config/dbConfig.js");
const app = require("./src/server.js");

// Definir el puerto por donde escuchara el servidor las solicitudes
const PORT = 3000;

const startServer = async () => {
  try {
    await dbConfig();
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`)
    });
  } catch (error) {
    console.log("Error al conectar la BD");
  }
};

startServer();
