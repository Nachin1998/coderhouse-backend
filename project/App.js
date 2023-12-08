import express from "express"

const server = express();

const alumno = {
    name: "Tu Vieja",
    age: 5,
    description: "La puta esa", 
    price: "Un agua"
}

server.get("/falopa", (request, response) => {
    response.send("Hola mundo la re concha de tu hermana");
});

server.get("/tuvieja", (request, response) => {
    response.send("<h1>Hola mundo la re concha de tu vieja</h1>");
});

server.get("/elpibe", (request, response) => {
    response.send(alumno);
});

const port = "8080";
server.listen(port, () => {
    console.log("Escuchando al port " + port + ", papu");
});