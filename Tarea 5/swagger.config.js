const port = process.env.PORT || 3000;
module.exports ={
    swaggerDefinition:{
        swagger: "2.0",
        info:{
            "title": "API de ejemplo",
            "descripction": "esta es una api de ejemplo 8 marzo",
            "version": "1.0.0",
            "servers": ["http://localhost:"+ port]
        }
    },
    apis: ['index.js', 'src/rutas/*.js']
}