const { boolean } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

console.log(argv);
console.log('base: yargs', argv.b);
console.log('hasta: yargs', argv.h);

crearArchivo(argv.b,argv.l,argv.h)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));