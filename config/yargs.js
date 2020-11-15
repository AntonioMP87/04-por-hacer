const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca la tarea como completado / pendiente'
    }
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', opts)
    .command('actualizar', 'Actualiza una tarea pendiente', opts)
    .command('listar', 'Presenta lista de tareas', opts)
    .command('borrar', 'Borra una tarea', opts)
    .help()
    .argv;


module.exports = {
    argv,
    opts
}