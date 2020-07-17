const express = require('express');
const app = express();
const hbs = require('hbs');


// Aplicamos un midelware
app.use(express.static(__dirname + '/public'));

// Express HBS engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales');

// Helpers
require('./hbs/helpers');




// Esto ya es un servicio
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'David SalinAs poma',
    });
});

// Esto ya es un servicio
app.get('/about', (req, res) => {
    res.render('about', {
    });
});


// app.get('/data', (req, res) => {

//     res.send('Hola Data');
// });


app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});