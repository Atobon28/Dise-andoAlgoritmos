const pregunta = require('readline');

const rl = pregunta.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuál es tu nombre? ', (nombre) => {
    rl.question('¿Cuál es tu edad? ', (edad) => {
        if (isNaN(edad) || !Number.isInteger(parseFloat(edad))) {
            console.log('Por favor, ingresa un número entero para la edad.');
        } else {
            console.log(`Hola, ${nombre}, tienes ${edad} años.`);
        }
        rl.close();
    });
});