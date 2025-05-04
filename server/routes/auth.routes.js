const authController = require("../controller/auth.controller.js");

const routes = (app) => {
  app.post("/auth/register", authController.registerUser);
  app.post("/auth/login", authController.loginUser);
};

module.exports = routes;
