// Haremos lo mismo que app.js, solo que ahora mas ordenado, en tablas y paginas js especificas para cada funcion
const fs = require('fs');
let salida = '';
let consola = '';
const colors = require('colors');

const crearArchivo = async (base = 5, lista, hasta) =>{
    try {
        for(let i = 1; i<= hasta; i++){
            // Tenemos 2 variables, una con colores(consola) y otra sin colores(salida). Ya que cuando grabamos los valores con colores
            // en un archivo txt, este se genera con errores, por lo tanto, no debe ir con formato de colores.
            salida += `${base} X ${i} = ${base * i}\n`; 
            consola += `${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        
        fs.writeFileSync(`./salida/Tabla-${base}.txt`,salida);
        if(lista)
            console.log(consola);

        return (`Tabla-${base}.txt creada desde promesa async`).blue;
    } catch (error) {
        throw error;
    }
}

// Para que podamos utilizar la funcion crearArchvio de arriba en la pagina index.js, debemos usar la siguiente sentencia
// con ella, lo que hacemos es dejarla disponible para ser llamada desde otra pagina.
module.exports = {crearArchivo}