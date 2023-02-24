const express= require('express');
const router=express.Router();

router.get('', function(req,res){
    //res.send('pagina 2 ');
    console.log("pagina2");
    res.render('pagina2');
})
//antes de definir las rutas hay que exportar el middleware
module.exports= router;