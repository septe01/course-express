//instatiate express module
const express = require("express");

require("express-group-routes");

//init bodyparser
const bodyParser = require("body-parser");

//use express in app variable
const app = express();

//define the server port
const port = 5000;

//allow this app to recived incoming json request
app.use(bodyParser.json());

//var name_controller = require('directory file')
const todosController = require("./controllers/todos");
const profileController = require("./controllers/profile");

// middleware
const { authenticated } = require("./auth/middleware");

//use group router here
app.group("/api/v1", router => {
  //Todo API
  //Get All data
  router.get("/todos", authenticated, todosController.index);
  //Find One data
  router.get("/todo/:id", todosController.show);
  //Insert Data
  router.post("/todo", todosController.insert);
  //Update Data
  router.patch("/todo/:id", todosController.update);
  //delete data
  router.delete("/todo/:id", todosController.destroy);
});

//use group router here
app.group("/api/v2", router => {
  // get all data
  router.get("/todos", (req, res) => {
    res.send(todos);
  });

  // insert data
  router.post("/todo", (req, res) => {
    const data = req.body;
    todos.push(data);
    res.send(data);
  });

  // update data
  router.patch("/todo/:id", (req, res) => {
    const id = req.params.id;
    const index = id - 1;
    const data = req.body;
    todos[index] = { ...todos[index], ...data };
    res.send(todos[index]);
  });

  // delete data
  router.delete("/todo/:id", (req, res) => {
    const id = req.params.id;
    const index = id - 1;
    todos.splice(index, 1);
    res.send({ status: "Success", data: todos });
  });
});

//create the home route
app.get("/", (req, res) => {
  res.send("Hello Batch 14");
});

//executed port
app.listen(port, () => console.log(`Listening on port ${port}!`));
