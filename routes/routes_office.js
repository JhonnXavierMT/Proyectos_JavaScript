const express = require("express");
const router = express.Router();
const controllerProductOffice=require("../controllers/productoController");

//OFFICE
router.get("/offices", (req, res) => {
    res.render("office");
});

router.get("/listTareas", (req, res) => {
    res.render("listTareas");
});

router.get("/crud_office", controllerProductOffice.index);

module.exports = router;