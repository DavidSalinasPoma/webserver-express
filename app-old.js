const http = require('http');
http.createServer((req, resp) => {

    resp.writeHead(200, { 'Content-Type': 'aplication/json' });
    let datos = {
        nomnbre: 'David',
        apellidos: 'Salinas Poma',
        edad: 37,
        url: req.url

    };
    resp.write(JSON.stringify(datos));
    resp.end();
})
    .listen(8090);
console.log('Escuchando el puerto 8080');