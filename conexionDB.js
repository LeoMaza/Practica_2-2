const mysql = require("mysql"); //pido usar el modulo mysql "conector"
require("dotenv").config();

//crear la conexion con los datos protegidos con la constantes utilizadas en el archivo .env
const conexionDB = mysql.createConnection({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB
});

// inicia la conexion con la base de datos
conexionDB.connect(function (error) {
    if (error) {
        throw error;  // lanza error en caso de que algo salga mal
    }
    console.log("Funciona Perro")
});
// obtener la informacion de registro de la tabla platos
conexionDB.query("SELECT * FROM platos", (error, registro) => {
    if (error) {
        throw error;
    }
    console.log("mostrando registro en la tabla \n", registro)
})
// cierra la conexion con la base de datos
conexionDB.end((error) => {// una funcion sin nombre puede usarse de esta se le conocw como arrow function 
    if (error) {
        return console.log("error: " + error.message)
    }
    console.log("conexion con base de datos cerrada");
})
