const { argv, opts } = require('./config/yargs');
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');
const { actualizar } = require('./por-hacer/por-hacer');

let comando = argv._[0];


switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        porHacer.guardarDB(tarea);
        break
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log(colors.green('======= Por hacer ======'));
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log(colors.green('======================='));
        }
        break
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);
        break
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(colors.red(`Borrada tarea ${argv.descripcion}`));
        break
    default:
        console.log('Comando no reconocido');

}