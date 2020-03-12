//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');


console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log('Crear por hacer');
        console.log(tarea);
        break;

    case 'listar':
        //console.log('Mostar todas la tareas por hacer');

        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log(' ======por hacer====='.green);
            console.log(tarea.descripcion);
            console.log('Estado :', tarea.completado);
            console.log('===================='.green);

        }

        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':

        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break

    default:
        console.log('Comando no valido');


}