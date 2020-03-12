const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
};

const completado = {
    completado: {
        alias: 'c',
        default: true
    }
}

const argv = require('yargs')
    .command('crear', 'Crear cosas por hacer', {
        descripcion

    })
    .command('actualizar', 'Actualizar cosas por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'borrar cosas por hacer', {
        descripcion

    })
    .help()
    .argv;

module.exports = {
    argv
}