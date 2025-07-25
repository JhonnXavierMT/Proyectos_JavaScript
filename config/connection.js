const chalk = require("chalk");
const mysql = require("mysql2");
//Establecemos la conexion con la base de datos.
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"oficina_db",
});
connection.connect((error)=>{
    if (!error) {
         console.log(chalk.bgHex("#b2ebf2").black.bold(" ⛅ MySql Connected ⛅ "))
         return;
    }
    console.log(chalk.bgHex("#ffc400ff").black.bold("🔥 MySql error Connection 🔥"))
});
module.exports=connection;