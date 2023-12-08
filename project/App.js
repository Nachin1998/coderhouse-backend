import express from "express"
import {students} from "./Students.js"

const server = express();
server.use(express.json());
server.use(express.urlencoded({extended: true}));

let users = [];
server.post("/idk", (request, response) => {
    const user = request.body;
    const id = users.length + 1;
    users.push({...user, id});
    response.send("tamo joya");
});

server.get("/idk", (request, response) => {
    response.send(users);
});

server.put("/idk/:id", (request, response) => {
    const {id} = request.params;

    if (!users.some(item => item.id === parseInt(id))){
        response.send({error:"Brokie " + id});
    }
    
    const bodyUser = request.body;
    const newUsers = users.map(user => {
        if(user.id === parseInt(id)){
            return {
                ...user,
                ...bodyUser,
                id: parseInt(id)
            }
        }

        return user;
    });
    
    response.send("all good");
    users = newUsers;
});

server.delete("/idk/:id", (request, response) => {
    const{id} = request.params;
    users = users.filter(user => user.id !== parseInt(id));
    response.send(id + " deleted");
});

server.get("/students", (request, response) => {
    response.send(students);
});

server.get("/students/:id/", (request, response) => {
    const { id } = request.params;
    const element = students.find(item => item.id === parseInt(id));
    response.send(element);
});

server.get("/querytest", (request, response) => {
    const { id, age } = request.query;
    const element = students.find(item => {
        const idMatches = item.id === parseInt(id);
        const ageMatches = !age ? true : item.age === parseInt(age);
        return idMatches && ageMatches;
    });

    if(!element){
        response.send("No such student");
    }
    else{
        response.send(element);
    }
});

const port = "8080";
server.listen(port, () => {
    console.log("Escuchando al port " + port + ", papu");
});