const db = require("../config/connection");

module.exports = {

    obtener: function (callback) {
        db.query("SELECT * FROM productos", callback);
    },
    insertar: function (datos,archivos, callback) {
        db.query(
            "INSERT INTO productos (nombre,descripcion,precio,cantidad,imagen) VALUES(?,?,?,?,?)",
            [datos.nombre,
            datos.descripcion,
            datos.precio,
            datos.cantidad,
            archivos.filename],
             callback);
    }
}