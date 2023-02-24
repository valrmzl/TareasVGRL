const express= require('express');
const router=express.Router();

router.get('', function(req,res){
   // res.send('pagina 3 ');
   console.log('pagina3');
   res.render('pagina3');
}) 
//antes de definir las rutas hay que exportar el middleware
module.exports= router;