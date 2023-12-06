//Importar el módulo de express
const express = require('express');
//crear una instancia en la aplicación de express
const app = express()
// Importar los routers
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

// Implementar los routers en rutas específicas
app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

//puerto
const port=3000; 


//tareas en formato JSON
const tareas =[
        {
        id: "1",
        description: "Entregables ADA",
        completed: false,
        },
        {
        id: "2",
        description: "Leer El Lobo Estepario",
        completed: false,
        },
        {
        id: "3",
        description: "Prepara empanadas veganas",
        completed: false,
        },
        {
        id: "4",
        description: "Construcción de personaje (Virginia)",
        completed: false,
        },
        {
        id: "5",
        description: "Trabajo VG",
        completed: false,
        }
    ];

function mostrarTareas() {
        console.log("Lista de tareas")
        tareas.forEach((tarea, index) => {
            const status = tarea.completed ? '( X )' : '(   )';
            console.log(`${index + 1}. ${ status } ${tarea.description}`);
    })}

mostrarTareas();

//Middleware para gestionar métodos HTTP válidos
const handleValidMethods = (req, res, next) => {
    const validMethods = ['GET', 'POST', 'PUT', 'DELETE'];
  
    if (!validMethods.includes(req.method)) {
      return res.status(400).json({ mensaje: 'Método HTTP no válido'});
    }
  
    next();
  };
app.use(handleValidMethods);
app.use(express.json());

app.listen(port, ()=> {
    console.log(`Servidor funcionando en el puerto: ${port}`)
    })