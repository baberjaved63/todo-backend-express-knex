const knex = require("./connection.js");

async function create(name, email, password) {
  const results = await knex("users")
    .insert({ name, email, password })
    .returning("*");
  return results[0];
}

async function getByEmail(email) {
  const results = await knex("users").where({ email });
  return results[0];
}

async function get(id) {
  const results = await knex("users").where({ id });
  return results[0];
}

module.exports = {
  create,
  getByEmail,
  get,
};
