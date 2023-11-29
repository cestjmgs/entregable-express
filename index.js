//Importar el módulo de express
const express = require('express');


//crear una instancia en la aplicación de express
const app = express()


//tareas en formato JSON

app.get('/tareas', (req, res) => {
    const tareas =[
        {
        "id": "1",
        "isCompleted": false,
        "description": "Estudiar guión Manda Patibularia"
        },
        {
            "id": "2",
            "isCompleted": false,
            "description": "Leer El Lobo Estepario"
        },
        {
            "id": "3",
            "isCompleted": false,
            "description": "Prepara empanadas veganas"
        }
    ];
    //arreglo como respuesta en formato JSON
    res.json(tareas);
});

//puerto
const port=3000; 

app.listen(port, ()=> {
    console.log(`Servidor funcionando en el puerto: ${port}`)
    })