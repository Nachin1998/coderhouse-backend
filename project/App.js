import express from "express"

const server = express();
server.use(express.urlencoded({extended: true}));

const students = [
    {
        id: 0,
        name: "Tu Vieja2",
        age: 52,
        description: "La puta esa2", 
        price: "Un agua2"
    },
    {
        id: 1,
        name: "Tu Vieja2",
        age: 52,
        description: "La puta esa2", 
        price: "Un agua2"
    },
    {
        id: 2,
        name: "Tu Vieja3",
        age: 53,
        description: "La puta esa3", 
        price: "Un agua3"
    }
]

server.get("/falopa", (request, response) => {
    response.send("Hola mundo la re concha de tu hermana");
});

server.get("/tuvieja", (request, response) => {
    response.send("<h1>Hola mundo la re concha de tu vieja</h1>");
});

server.get("/elpibe", (request, response) => {
    response.send(alumno);
});

server.get("/students", (request, response) => {
    response.send(students);
});

server.get("/students/:id/", (request, response) => {
    const { id } = request.params;
    const element = students.find(item => item.id === parseInt(id));
    response.send(element);
});

const port = "8080";
server.listen(port, () => {
    console.log("Escuchando al port " + port + ", papu");
});