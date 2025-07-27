const express = require("express");
const router = express.Router();
const controllerProductOffice = require("../controllers/productoController");
const multerimg = require("multer");

var fecha = Date.now();
var rutaAlmacen = multerimg.diskStorage({
    destination: function (request, file, callback) {
        callback(null, './public/img/');
    },
    filename:function(request, file, callback) {
        console.log(file);
        callback(null,fecha+"_"+file.originalname);
    }
});

var cargar = multerimg({storage:rutaAlmacen});


//OFFICE
router.get("/offices", (req, res) => {
    res.render("office");
});

router.get("/listTareas", (req, res) => {
    res.render("listTareas");
});

router.get("/crud_office", controllerProductOffice.index);
router.post("/crud_office",cargar.single("imagen"), controllerProductOffice.Guardar);
router.get("/crud_office/crear", controllerProductOffice.Crear);
router.post("/crud_office/eliminar/:id", controllerProductOffice.Eliminar);
router.get("/crud_office/editar/:id", controllerProductOffice.Editar);
router.post("/crud_office/actualizar",cargar.single("imagen"), controllerProductOffice.Actualizar);

module.exports = router;