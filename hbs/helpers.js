
const hbs = require('hbs');
// Helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    // Capitalizar todas las primeras palabras en mayuscula y las demas en minuscula
    let palabras = texto.split(' ');
    // Barremos la palabras con un foreach
    console.log(palabras);
    palabras.forEach((palabra, index) => {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});