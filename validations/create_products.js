//importamos midlewares para validaciones. 
const { body } = require('express-validator');
const reglasProducto=[
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('precio').isFloat({gt:0}).withMessage('El precio debe ser mayor a 0')
];
module.exports = reglasProducto;