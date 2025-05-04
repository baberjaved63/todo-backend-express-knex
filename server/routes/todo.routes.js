const todoController = require("../controller/todo.controller.js.js");

const routes = (app) => {
  app.get("/todos/", todoController.getAllTodos);
  app.get("/todos/:id", todoController.getTodo);

  app.post("/todos/", todoController.postTodo);
  app.patch("/todos/:id", todoController.patchTodo);

  app.delete("/todos/", todoController.deleteAllTodos);
  app.delete("/todos/:id", todoController.deleteTodo);
};

module.exports = routes;
