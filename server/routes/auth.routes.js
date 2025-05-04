const authController = require("../controller/auth.controller.js");
const authMiddleware = require("../middlewares/auth.js");

const routes = (app) => {
  app.post("/auth/register", authController.registerUser);
  app.post("/auth/login", authController.loginUser);
  app.get("/auth/me", authMiddleware, authController.userProfile);
};

module.exports = routes;
