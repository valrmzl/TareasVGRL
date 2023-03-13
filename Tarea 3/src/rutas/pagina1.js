
const express= require('express');
const router=express.Router();

router.get('', function(req,res){
    console.log('pagina1')
    //res.send('pagina 1 ');
    res.render('pagina1');
})
//antes de definir las rutas hay que exportar el middleware
module.exports= router;