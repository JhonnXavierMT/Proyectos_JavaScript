//llamamos a la conexion de la base de datos
const modeloProductoOffice=require("../models/productoModel")
module.exports={
    //req => lo que solicita.
    //res => Como responde.

    index:function(req,res){
        modeloProductoOffice.obtener(function(err,datos){
            if(err) return res.status(500).send("Error");            
            res.render("crud_office",{productos:datos});
        });

    }
};