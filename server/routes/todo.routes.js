const todoController = require("../controller/todo.controller.js.js");

const routes = (app) => {
  app.get("/todo/", todoController.getAllTodos);
  app.get("/todo/:id", todoController.getTodo);

  app.post("/todo/", todoController.postTodo);
  app.patch("/todo/:id", todoController.patchTodo);

  app.delete("/todo/", todoController.deleteAllTodos);
  app.delete("/todo/:id", todoController.deleteTodo);
};

module.exports = routes;
