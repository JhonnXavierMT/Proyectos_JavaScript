const db = require("../config/connection");

module.exports = {

    obtener: function (callback) {
        db.query("SELECT * FROM productos", callback);
    },
    insertar: function (datos, archivos, callback) {
        db.query(
            "INSERT INTO productos (nombre,descripcion,precio,cantidad,imagen) VALUES(?,?,?,?,?)",
            [datos.nombre,
            datos.descripcion,
            datos.precio,
            datos.cantidad,
            archivos.filename],
            callback);
    },
    obenerDatosId: function (id, callback) {
        db.query("SELECT * FROM productos WHERE id=?", [id], callback);
    },
    borrarDato: function (id, callback) {
        db.query("DELETE FROM productos WHERE id=?", [id], callback);
    },
    actualizar: function (datos, callback) {
        db.query(
            "UPDATE productos SET nombre=?,descripcion=?,precio=?,cantidad=? WHERE id=?",
            [datos.nombre,
            datos.descripcion,
            datos.precio,
            datos.cantidad,
            datos.id],
            callback);
    },
    actualizarImg: function (datos,archivo, callback) {
        db.query(
            "UPDATE productos SET imagen=? WHERE id=?",
            [archivo.filename,
            datos.id],
            callback);
    },
}