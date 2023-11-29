//Importar el módulo de express
const express = require('express');
const listEditRouter = express.Router();

//Ruta para crear una nueva tarea

listEditRouter.post('/creartareas', (req, res) => {
    const description = req.body.description;
    const crearTarea = { id: id, description: description, isCompleted: false};
    tasks.push(crearTarea);
    res.send('La tarea fue creada exitosamente.')
}); 

//Ruta para eliminar una tarea
listEditRouter.delete('/eliminartareas/:tareaId', (req, res) => {
    const tareaId = req.params.tareaId;
    if(tareaId >= 0 && tareaId < tasks.length) {
        tasks.splice(tareaId, 1);
        res.send(`Tarea con el ID: ${tareaId} fue eliminada exitosamente.`);
    } else {
        res.send('No se pudo eliminar la tarea. Verifique que los datos son los correctos.')
    }
});

//Ruta para actualizar una tarea
listEditRouter.put('/actualizartareas/:tareaId', (req, res) => {
    const tareaId = req.params.tareaId;
    const actualizarDescripcion = req.params.description;
    if (tareaId >= 0 && tareaId < tasks.length){
        task[tareaId].description = actualizarDescripcion;
        res.send(`Tarea con el ID: ${tareaId} fue actualizada exitosamente.`);
    } else {
        res.send('No se pudo actualizar la tarea. Verifique que los datos son los correctos.')   
    }
    
  });


  module.exports = listEditRouter;