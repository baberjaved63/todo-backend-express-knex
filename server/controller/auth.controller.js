const _ = require("lodash");
const user = require("../database/user-queries.js");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const addErrorReporting = require("../utils/error-reports.js");

function createUser(req, data) {
  const protocol = req.protocol,
    host = req.get("host"),
    id = data.id;

  return {
    name: data.name,
    email: data.email,
    url: `${protocol}://${host}/user/${id}`,
  };
}

const validateRegister = (user) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  return schema.validate(user);
};

const validateLogin = (user) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  return schema.validate(user);
};

async function getUser(req, res) {
  const user = await user.get(req.params.id);
  return res.send(user);
}

async function registerUser(req, res) {
  const { error } = validateRegister(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let password = await bcrypt.hash(req.body.password, 10);
  const created = await user.create(req.body.name, req.body.email, password);
  return res.send(createUser(req, created));
}

async function loginUser(req, res) {
  const { error } = validateLogin(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const userData = await user.getByEmail(req.body.email);
  let passwordMatch = await bcrypt.compare(req.body.password, userData.password);
  console.log(passwordMatch);
  
  if (!passwordMatch) return res.status(400).send("Invalid password");
  return res.send({ user: createUser(req, userData) });
}

const toExport = {
  registerUser: {
    method: registerUser,
    errorMessage: "Could not register User",
  },
  loginUser: {
    method: loginUser,
    errorMessage: "Could not login User",
  },
};

for (let route in toExport) {
  toExport[route] = addErrorReporting(
    toExport[route].method,
    toExport[route].errorMessage
  );
}

module.exports = toExport;
