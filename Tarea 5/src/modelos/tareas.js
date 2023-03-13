const {Schema,  model }= require('mongoose');

const tareaSchema= new Schema({
    //la estrctura de la tarea 
    id: {type: String},
    Titulo: {type: String},
    Descripcion: {type: String},
    Status : {type: String, default: 'New'},
    Fecha: {type: String}
});
//espera que sea en plural 
module.exports= model('tareas',tareaSchema);

