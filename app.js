//importamos las rutas de el archivo rutas
//import router from "./routes/routes.js";
//importamos el modulo express y path y chalk------------------------------------
const express = require("express");
const path = require("path");
const chalk = require("chalk");
const bodyParser = require("body-parser");
const router = require("./routes/routes"); 
//importamos inicio de session y flash para mensajes temporales
const session = require('express-session');
const flash = require('connect-flash');

// Se ejecuta Express para crear un objeto app que funcionará como el servidor
const app = express();

//aplicamos los estilos y funcionalidades de javascript
app.use("/css", express.static(path.join(__dirname, "public", "css")));
app.use("/js", express.static(path.join(__dirname, "public", "js")));
app.use("/img", express.static(path.join(__dirname, "public", "img")));

//----------Usamos el inicio de session y flash
app.use(session({
  secret: 'CLave3434748584#&#&$/$(JhonnINformatico)=023',
  resave: false,
  saveUninitialized: false
}));

app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});

//----------para el motor de plantillas-----------------------
app.set("view engine", "ejs"); // EJS setup
app.set("views", path.join(__dirname, "views")); // Set the views directory


// Middleware para leer datos del body
app.use(express.urlencoded({ extended: true }));

//Configuración de enrutamiento--------------------

// Usamos las rutas definidas en routes.js
app.use("/", router); // 👈 Montamos las rutas
//-------------------------------------------------------
//configuramos para que reciba datos para el create
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log(
        chalk.bgHex("#1994ffff").white.bold(" ☄️ EXPRESS SERVER STARTED ☄️ ")
    );
    console.log(
        chalk.green("Running at: ") + chalk.cyan("http://localhost:3000")
    );
    console.log(chalk.gray("Press Ctrl+C to stop the server."));
});