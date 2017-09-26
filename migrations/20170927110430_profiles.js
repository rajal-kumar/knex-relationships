
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profiles', function (table) {
    table.increments('user_id').references('users.id')
    table.string('name')
    table.string('profile_pic')
    table.string('URL')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('profiles')
};
