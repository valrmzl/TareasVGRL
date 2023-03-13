
const { response } = require('express');
const Tarea = require('./../modelos/tareas');


const TareasController = {
   listar : (req,res)=>{
    Tarea.find({})
        .then(response=>{
            res.send({tareas: response});
            console.log(response);
        })
        .catch(error =>{
            res.status(400).send('algo salio mal');
        })
   },

   crearTarea: (req, res)=>{
    const nuevaTarea = new Tarea({
        id: req.body.id,
        Titulo: req.body.Titulo,
        Descripcion: req.body.Descripcion,
        Status: req.body.Status || 'new',
        Fecha: req.query.fecha || new Date()
      });

      nuevaTarea.save()
      .then(response => {
        console.log("ESTA FUE LA TAREA CREADA");
        console.log(response);
        res.send({tarea:response});
      })
      .catch(error => {
        res.status(400).send('Error al crear tarea');
      });
   },

   actualizarTareaID: (req, res)=>{
    //se actualiza a partir de su ID
    const idTarea= req.body.id;

    //ver cuales parametros se pasaron 
    //para solo actualizae esos
    // y no todos y no queden campos vacios

    const parametrosAActualizar={};

    if(req.body.Titulo!="" || undefined)
        parametrosAActualizar.Titulo=req.body.Titulo;
    if(req.body.Descripcion!="" || undefined)
        parametrosAActualizar.Descripcion=req.body.Descripcion;
    if(req.body.Status!="" || undefined)
        parametrosAActualizar.Status=req.body.Status;

        console.log('entro a actualizar');
        console.log(parametrosAActualizar);
        Tarea.findOne({id: idTarea})
        .then(response=>{
            if(response){
                console.log('en el actualizar');
                Tarea.updateOne({id: idTarea},{$set:parametrosAActualizar})
                .then(response=>{
                    console.log('LA TAREA SE ACTUALIZO CORRECTAMENTE');
                    res.send({tarea:response});
                })
                .catch(error=>{
                    res.status(400).send('Error al crear tarea');
                })
            }else{
                console.log("NO SE ENCONTRO NINGUNA TAREA CON ESE ID PARA SER ACTUALIZADA");
                res.status(404).send('No se encontro ninguna tarea con ese id para ser actaulizada');
            }
        
        })
        .catch(error=>{
            res.status(400).send('algo salio mal');
        })
   },

   eliminarTareaID: (req, res)=>{
    const idTarea= req.params.id;
    Tarea.deleteOne({id: idTarea})
        .then(response=>{
            if(response.deletedCount>0){
                res.send({tareas:response});
                console.log("TAREA ", idTarea,' ELIMINADA' );
                //console.log(response);
            }else{
                console.log("NO SE ENCONTRO NIGNUNA TAREA CON ESE ID PARA ELIMINARLA");
                res.status(404).send('No se encontro ninguna tarea con ese id para eliminarla');
            }
        })
        .catch(error=>{
            res.status(400).send('algo salio mal');
        })
   },


   tareaID: (req, res) => {
    const id = req.params.id;
    Tarea.findOne({id: id})
        .then(response=>{
            if(response){
                res.send(response);
                console.log("TAREA ESPECIFICA"); console.log(id);  console.log(response);
            }else{
                console.log("NO SE ENCONTRO NINGUNA TAREA CON ESE ID");
                res.status(404).send('No se encontro ninguna tarea con ese id');
            }
        
        })
        .catch(error=>{
            res.status(400).send('algo salio mal');
        })
  },
}

module.exports= TareasController;



