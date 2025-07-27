//llamamos a la conexion de la base de datos
const modeloProductoOffice = require("../models/productoModel")
const borrar = require("fs");
module.exports = {
    //req => lo que solicita.
    //res => Como responde.

    index: function (req, res) {
        modeloProductoOffice.obtener(function (err, datos) {
            if (err) return res.status(500).send("No se logro mostrar los datos");
            res.render("crud_office", { productos: datos });
        });

    },
    Crear: function (req, res) {
        res.render("crud_product");
    },
    Guardar: function (req, res) {
        //res.send(req.body);
        //console.log(req.body);
        //console.log(req.file.filename);
        modeloProductoOffice.insertar(req.body, req.file, function (err) {
            res.redirect('crud_office');
        });
    },
    Eliminar: function (req, res) {
        modeloProductoOffice.obenerDatosId(req.params.id, function (err, registro) {

            const ubicacion_img = "public/img/" + (registro[0].imagen);

            if (borrar.existsSync(ubicacion_img)) {
                borrar.unlinkSync(ubicacion_img);
            }
            modeloProductoOffice.borrarDato(req.params.id, function (err) {
                res.redirect("/crud_office");
            });
        });
    },
    Editar: function (req, res) {
        modeloProductoOffice.obenerDatosId(req.params.id, function (err, registro) {
            //devuelve un array con un objeto:
            //  registro=> [{nombre:"mesa",etc}]
            //console.log(registro[0]);
            res.render("editar_product", { producto: registro[0] });
        });
    },
    Actualizar: function (req, res) {
        if (req.file) {
            if (req.file.filename) {

                modeloProductoOffice.obenerDatosId(req.body.id, function (err, registro) {
                    const ubicacion_img = "public/img/" + (registro[0].imagen);
                    if (borrar.existsSync(ubicacion_img)) {
                        borrar.unlinkSync(ubicacion_img);
                    }
                    modeloProductoOffice.actualizarImg(req.body, req.file, function (err) { });
                });
            }
        }
        if (req.body.nombre) {
            modeloProductoOffice.actualizar(req.body, function (err) { });
        }
        res.redirect('/crud_office')
    }
};