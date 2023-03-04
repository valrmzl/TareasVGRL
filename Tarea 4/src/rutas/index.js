const express= require('express');
const router=express.Router();

const rutaNoticias= require('./noticias');
const rutaEntrada=require('./entrada');
router.use('/', rutaEntrada);
router.use('/noticias',rutaNoticias);
module.exports=router;