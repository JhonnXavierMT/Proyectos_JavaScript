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

    },
    Crear:function(req,res){
        res.render("crud_product");
    },
    Guardar:function(req,res){
        //res.send(req.body);
        //console.log(req.body);
        //console.log(req.file.filename);
        modeloProductoOffice.insertar(req.body,req.file,function(err){
            res.redirect('crud_office');
        });
    }
};