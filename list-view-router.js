//Importar el módulo de express
const express = require('express');
const listViewRouter = express.Router();

//Ruta para las tareas completadas
listViewRouter.get('/tareascompletadas', (req, res) => 
{
    const tareasCompletadas = tasks.filter((task) => task.completed);
    res.json(tareasCompletadas);
})

//Ruta para las tareas por completar
listViewRouter.get('/tareasporcompletar', (req, res) => 
{
    const tareasPorCompletar = tasks.filter((task) => !task.completed);
    res.json(tareasPorCompletar);
});

module.exports = listViewRouter; 