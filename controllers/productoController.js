//llamamos a la conexion de la base de datos
const { send } = require("process");
const modeloProductoOffice = require("../models/productoModel")
const borrar = require("fs");
function control_de_error(req, err) {
    if (err) {
        req.flash('error', 'Hubo un error al Realizar la Accion del producto');
    } else {
        req.flash('success', 'Realizado correctamente');
    }
}
module.exports = {
    //req => lo que solicita.
    //res => Como responde.
    index: function (req, res) {
        modeloProductoOffice.obtener(function (err, datos) {
            if (err) return res.status(404).send("No se logro encontrar la pagina")
            res.render("crud_office", {
                productos: datos
                /*  errores: req.flash('erroresForm') || [],
                 abrirModal: req.flash('abrirModal')[0] || false */
            });
        });
    },
    Crear: function (req, res) {
        res.render("crud_product");
    },
    Guardar: function (req, res) {
        modeloProductoOffice.insertar(req.body, req.file, function (err) {
            control_de_error(req, err);
            res.redirect('/crud_office');
        });
    },
    Eliminar: function (req, res) {
        modeloProductoOffice.obenerDatosId(req.params.id, function (err, registro) {

            const ubicacion_img = "public/img/" + (registro[0].imagen);

            if (borrar.existsSync(ubicacion_img)) {
                borrar.unlinkSync(ubicacion_img);
            }
            modeloProductoOffice.borrarDato(req.params.id, function (err) {
                control_de_error(req, err);
                res.redirect("/crud_office");
            });
        });
    },
    Editar: function (req, res) {
        modeloProductoOffice.obenerDatosId(req.params.id, function (err, registro) {
            //devuelve un array con un objeto:
            //  registro=> [{nombre:"mesa",etc}]
            //console.log(registro[0]);
            if (err) return res.status(404).send("No se pudo encontrar la pagina");
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
            modeloProductoOffice.actualizar(req.body, function (err) { control_de_error(req, err); });
        }

        res.redirect('/crud_office')
    }
};