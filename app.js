const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(archivo => { console.log(`${archivo}`); })
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => { console.log('Archivo creado', colors.green(archivo)) })
            .catch(e => console.log(e));
        break;

    default:
        break;
}
// Cogemos la base como parametro de entrada
// const parametro = argv[2];
// const base = parametro.split('=')[1];

// crearArchivo(base).then(archivo => { console.log(`Archivo creado ${archivo}`); })
//     .catch(e => console.log(e))