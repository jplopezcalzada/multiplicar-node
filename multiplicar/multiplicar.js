// requerids
const colors = require('colors');

const fs = require('fs');

let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            return reject(`El valor introducido ${base} no es un número`);
        }
        if (!Number(limite)) {
            return reject(`El valor introducido ${limite} no es un número`);
        }
        console.log('========================='.green);
        console.log(`====Tabla del ${base}======`.green);
        console.log('========================='.green);

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        resolve(data);
    });

}
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            return reject(`El valor introducido ${base} no es un número`);
        }
        if (!Number(limite)) {
            return reject(`El valor introducido ${limite} no es un número`);
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`./tablas/tabla-${base}-al-limite${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`tabla-${base}-al-limite${limite}.txt`);
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla

}