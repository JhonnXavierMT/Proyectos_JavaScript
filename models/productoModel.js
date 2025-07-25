const db=require("../config/connection");

module.exports={

    obtener:function(callback) {
        db.query("SELECT * FROM productos",callback);
    }
}