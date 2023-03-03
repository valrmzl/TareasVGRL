const express= require('express');
const routes= require('./src/rutas');
const path= require('path');

const app= express();
const {engine} = require('express-handlebars');
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
//el tercer paso es decirle donde esta la carpeta de views
app.set('views', './src/views'); //mi app ya esta lista ára renderizar 
// en vez de enviar un archivo ahora va a ser un render 
const port= 3000;
app.use('/assets', express.static(path.join(__dirname,'assets')));
app.listen(port, function(){
    console.log('VALERIA RAMIREZ TAREA 4');
    console.log("Corriendo en el puerto", port);
})
app.use('', routes);
