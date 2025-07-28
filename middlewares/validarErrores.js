const { validationResult } = require('express-validator');

const validarErrores = (req, res, next) => {
    const errores = validationResult(req);
    console.log(errores);
    if (!errores.isEmpty()) {

        /* req.flash('erroresForm', errores.array());
        req.flash('abrirModal', true);
         */
       /*  return res.redirect('/crud_office'); */
       return res.status(500).send(errores);;
    }
    next();
}
module.exports = validarErrores;