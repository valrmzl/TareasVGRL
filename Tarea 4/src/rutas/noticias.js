const express= require('express');
const router=express.Router();
const controller = require('../controladores/noticiasControlador');

router.get('',controller.listar);
module.exports=router;