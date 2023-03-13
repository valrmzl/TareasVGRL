/*
console.log("hola mundo")

const version= require('./animal');
console.log(version);
*/

/*crear la aplicacion es construir express*/


//es el archivo que se encarga de que la aplicacion corra
//toda la configuración va a aqui
//este es mi enter point
const express = require('express');

const routes = require('./src/rutas');
const mongoose= require('mongoose');
const swaggerJsDoc= require('swagger-jsdoc');
const swaggerUI=require('swagger-ui-express');
const swaggerConf=require('./swagger.config');


const app = express();
require('dotenv').config();

const mongoUrl=process.env.MONGO_URL;
const path= require('path');
const {engine} = require('express-handlebars');
app.engine('handlebars', engine({
    defaultLayout:'main',
    runtimeOptions:{
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}
));
app.set('view engine', 'handlebars');
//el tercer paso es decirle donde esta la carpeta de views
app.set('views', './src/views'); //mi app ya esta lista ára renderizar 
// en vez de enviar un archivo ahora va a ser un render 

/*cuando lo suba lo mas probable es que no este disponible */ 
//const port = 3000;
const port=process.env.PORT || 3000;
app.use('/assets', express.static(path.join(__dirname,'assets')));

const swaggerDocs= swaggerJsDoc(swaggerConf);
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use('', routes);
mongoose.connect(mongoUrl).then(()=>{
    console.log('se conecto correctamente a la base de datos');
    app.listen(port, function(){
        console.log("app corriendo en el puerto "+ port);
      
    });
}).catch(err=>{
    console.log('No se pudo conectar a la base de datos');
    console.log(err);
});

//app.use('', routes);

/*lo primero que recibe es la ruta, que es el endopint, el segundo parametro es dicha funcion*/ 
/**solo se define la funcion pero no se ejecuta */


