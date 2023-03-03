
const express= require('express');
const router=express.Router();

router.get('', function(req,res){
    res.render('pagina1');
})
//antes de definir las rutas hay que exportar el middleware
module.exports= router;