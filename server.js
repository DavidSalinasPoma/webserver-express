const express = require('express');
const app = express();
const hbs = require('hbs');
// Helpers
require('./hbs/helpers');
const port = process.env.PORT || 3000;


// Aplicamos un midelware
app.use(express.static(__dirname + '/public'));

// Express HBS engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales');






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


app.listen(port, '0.0.0.0', () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});