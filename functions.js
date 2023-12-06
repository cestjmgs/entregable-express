
/*Requiriendo readline para interactuar por la consola
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});*/

function agregarTareas (id, description) {
    tareas.push({ 
        id: id,
        description: description,
        completed: false,
    })
    console.log("La tarea se agregó correctamente a su lista de tareas.")
}

function mostrarTareas() {
    console.log("Lista de tareas")
    tareas.forEach((tarea, index) => {
        const status = tarea.completed ? '( X )' : '(   )';
        console.log(`${index + 1}. ${ status } ${tarea.description}`);
})}

function eliminarTareas(id) {
    // Encuentra el índice de la tarea con el ID proporcionado
    const index = tareas.findIndex((tarea) => tarea.id === id);
    
    // Verifica si se encontró la tarea antes de intentar eliminarla
    if (index !== -1) {
        tareas.splice(index, 1);
        console.log(`La tarea con ID ${id} fue eliminada correctamente.`);
    } else {
        console.log(`No se encontró ninguna tarea con el ID ${id}.`);
    }}

function completarTarea(id) {
        const tarea = tareas.find((t) => t.id === id);
    
        if (tarea) {
            tarea.completed = true;
            console.log(`La tarea con ID ${id} se marcó como completada.`);
        } else {
            console.log(`No se encontró ninguna tarea con el ID ${id}.`);
        }
    }
function pregunta() {
    rl.question("¿Qué acción desea realizar?: mostrar, agregar, eliminar o completar: ", (accion) => {
        if (accion === "agregar") {
            // Solicitar id y description antes de llamar a agregarTareas
            rl.question("Ingrese el ID de la tarea: ", (id) => {
                rl.question("Ingrese la descripción de la tarea: ", (description) => {
                    agregarTareas(id, description);
                    console.log(tareas);
                    pregunta();
                });
            });
        } else if (accion === "mostrar") {
            mostrarTareas();
            pregunta();
        } else if (accion === "eliminar") {
            rl.question("Ingrese el ID de la tarea que desea eliminar: ", (id) => {
                eliminarTareas(id);
                console.log(tareas);
                pregunta();
            });
         } else if (accion === "completar") {
                rl.question("Ingrese el ID de la tarea que desea completar: ", (id) => {
                    completarTarea(id);
                    mostrarTareas();
                    pregunta();
                });
        
        } else {
            rl.close();
        }
    });
}

pregunta();