const express= require('express');
//const rutas = require('./rutas');
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
app.listen(port, function(){
    console.log('VALERIA RAMIREZ TAREA 3');
    console.log("Corriendo en el puerto", port);
})
app.use('/assets', express.static(path.join(__dirname,'assets')));

app.use('', routes);


app.get('*', function(req, res){
    console.log('pagina no encontrada');
    res.status(404);
    res.render('error');
});