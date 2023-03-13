const express= require('express');

const router= express.Router();

const rutasHome=require('./pagina1');
const rutasPagina2=require('./pagina2');
const rutaspagina3= require('./pagina3');


router.use('/',rutasHome);
router.use('/pagina2',rutasPagina2);
router.use('/pagina3',rutaspagina3);




module.exports= router;