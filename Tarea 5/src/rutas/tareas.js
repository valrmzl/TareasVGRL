//const router = require('express').Router()

const express= require('express');
const router=express.Router();
const controller = require('../controladores/tareasContro');
/**
 * @swagger
 * /tareas:
 *   post:
 *     summary: Crear una nueva tarea
 *     description: Crea una nueva tarea con los datos proporcionados. Si el status se omite, se agrega "new", al igual que con la fehca se pone la del dia de hoy
 *     parameters:
 *       - in: body
 *         name: tarea
 *         description: Objeto tarea que contiene los datos de la tarea a crear
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *             Titulo:
 *               type: string
 *               description: Título de la tarea
 *             Descripcion:
 *               type: string
 *               description: Descripción de la tarea
 *             Status:
 *               type: string
 *               description: Estado de la tarea
 *             Fecha:
 *               type: string
 *               description: Fecha de creación de la tarea
 *               
 *     responses:
 *       '200':
 *         description: La tarea ha sido creada correctamente
 *       '400':
 *         description: Los datos de la tarea son inválidos
 */



router.post('',express.json(), controller.crearTarea);

/**
 * @swagger
 * /tareas:
 *   get:
 *     summary: Obtener todas las tareas de la base de datos
 *     description: Retorna todas las tareas que han sido creadas en la base de datos.
 *     responses:
 *       200:
 *          description: Se mostraron todas las tareas de la base de datos.
 *       400:
 *         description: Algo salió mal en el servidor.
 */

router.get('', controller.listar);


/**
 * @swagger
 * /tareas/{id}:
 *   get:
 *     summary: Obtiene una tarea por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la tarea a obtener.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Se mostro la tarea de ese id
 *       404:
 *         description: No se encontró ninguna tarea con el ID proporcionado.
 *       400:
 *         description: Algo salió mal en el servidor.
 */
router.get('/:id', controller.tareaID);

/**
 * @swagger
 * /tareas/{id}:
 *   delete:
 *     summary: Elimina una tarea a partir de su id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la tarea a obtener.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Se elimino con éxito
 *       404:
 *         description: No se encontró ninguna tarea con el ID proporcionado para ser eliminada.
 *       400:
 *         description: Algo salió mal en el servidor.
 */
router.delete('/:id', controller.eliminarTareaID );


/**
 * @swagger
 * /tareas/{id}:
 *   put:
 *     summary: Actualiza una tarea a partrir de su id
 *     parameters:
 *       - in: body
 *         name: tarea
 *         description: Objeto tarea que contiene los datos de la tarea a actualizar
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *             Titulo:
 *               type: string
 *               description: Título de la tarea
 *             Descripcion:
 *               type: string
 *               description: Descripción de la tarea
 *             Status:
 *               type: string
 *               description: Estado de la tarea
 *     responses:
 *       200:
 *         description: Se actualizo con éxito
 *       404:
 *         description: No se encontró ninguna tarea con el ID proporcionado para ser actualizada.
 *       400:
 *         description: Algo salió mal en el servidor.
 */
router.put('/:id', express.json(),controller.actualizarTareaID );

//antes de definir las rutas hay que exportar el middleware
module.exports= router;
