let jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
  let token = req.headers["authorization"];
  if (!token) return res.status(401).send("No token token");
  let tokenData = token.split(" ");
  let user = jwt.verify(tokenData[1], process.env.JWT_SECRET);
  if (!user) return res.status(401).send("Invalid token");
  req.user = user;
  next();
};

module.exports = authMiddleware;
