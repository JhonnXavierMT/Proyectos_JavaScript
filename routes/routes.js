const express = require("express");
const router = express.Router();

// Importamos rutas por módulos
const gamesRoutes = require("./routes_game");
const officeRoutes = require("./routes_office");

router.get("/", (req, res) => {
    res.render("index");
});

// Montamos los módulos como rutas
router.use("/", gamesRoutes);
router.use("/", officeRoutes);

//EJERCICIOS
router.get("/ejercicios", (req, res) => {
    res.render("ejercicios");
});


module.exports = router;