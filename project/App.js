import express from "express"
import {students} from "./Students.js"

const server = express();
server.use(express.urlencoded({extended: true}));

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