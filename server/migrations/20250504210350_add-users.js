exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id");
    table.string("name");
    table.string("email");
    table.string("password");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
