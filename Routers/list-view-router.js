//Importar el módulo de express
const express = require('express');
const listViewRouter = express.Router();
const app = express();

app.use(express.json());

//Middleware para gestionar parámetros correctos
const handleParams = (req, res, next) => { 
    const tareaId = req.params.tareaId; 

    if(isNaN(tareaId)) {
    return res.status(400).json('Parámetro no válido.');
    }; 
    next();

};

//Ruta para las tareas completadas
listViewRouter.get('/tareascompletadas', handleParams, (req, res) => 
{
    const tareasCompletadas = tareas.filter((tarea) => tarea.completed);
    res.status(200).json(tareasCompletadas);
})

//Ruta para las tareas por completar
listViewRouter.get('/tareasporcompletar', handleParams, (req, res) => 
{
    const tareasPorCompletar = tareas.filter((tarea) => !tarea.completed);
    res.status(200).json(tareasPorCompletar);
});

module.exports = listViewRouter; 