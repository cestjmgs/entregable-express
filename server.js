const express = require('express');
const app = express()
const port=3000; 
require('dotenv').config();
// Importar los routers
const listViewRouter = require('./Routers/list-view-router');
const listEditRouter = require('./Routers/list-edit-router');
const authRouter = require('./Routers/auth')

//Raiz
app.get("/", validarToken, (req, res) => {
  res.send("Bienvenido a la aplicación de gestión de tareas.");
});


// Implementar los routers en rutas específicas
app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);
app.use('/auth', authRouter)


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
//Middleware para validar el Token
  function validarToken(req, res, next){
    const accessToken = req.headers.authorization
    if(!accessToken){
        res.status(401).send("El token no es válido")
    }
    jwt.verify(accessToken, process.env.JWT_SECRETO || "secreto", (err)=>{
        if (err){
            res.send(err)
        } else {
            next();
        }
    });
}
  app.use(handleValidMethods);
  app.use(express.json());

app.listen(port, ()=> {
    console.log(`Servidor funcionando en el puerto: ${port}`)
    })