const http = require('http');

const server = http.createServer((request, response) => {
    response.end("Hola mundo la re concha de tu hermana");
});

const port = "8080";
server.listen(port, () => {
    console.log("Escuchando al port " + port + ", papu");
});