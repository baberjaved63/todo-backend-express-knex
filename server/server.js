const app = require("./server-config.js");
const todoRoutes = require("./routes/todo.routes.js");
const authRoutes = require("./routes/auth.routes.js");

const port = process.env.PORT || 5000;

todoRoutes(app);
authRoutes(app);

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Listening on port ${port}`));
}

module.exports = app;
