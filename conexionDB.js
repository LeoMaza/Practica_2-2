const mysql = require("mysql"); //pido usar el modulo mysql "conector"
require("dotenv").config();
let sqlComando = "DELETE FROM platos WHERE id_plato = 2";

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
/*  //insertando nuevo registro
conexionDB.query("INSERT INTO platos(nombre, precio, con_oferta)VALUES('ensalada cesar', 800, FALSE)", (error, resultado) => {
    if (error) {
        throw error;
    }
    console.log("Insertando nuevo registro \n", resultado)
})*/


/*//Actualizando nuevo registro
conexionDB.query("UPDATE platos SET con_oferta = FALSE WHERE con_oferta = TRUE", (error, resultado) => {
    if (error) {
        throw error;
    }
    console.log("Actualizamos un registro en la tabla \n", resultado)
})*/

/*//Eliminar un registro
conexionDB.query(sqlComando, (error, resultado) => {
    if (error) {
        throw error;
    }
    console.log("Eliminamos un registro  \n", resultado)
})*/

// cierra la conexion con la base de datos
conexionDB.end((error) => {// una funcion sin nombre puede usarse de esta se le conocw como arrow function 
    if (error) {
        return console.log("error: " + error.message)
    }
    console.log("conexion con base de datos cerrada");
})
