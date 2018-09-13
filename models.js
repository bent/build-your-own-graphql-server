const Sequelize = require("sequelize")

const db = new Sequelize('todos', null, null, {
  dialect: 'sqlite',
  storage: './database.sqlite',
  operatorsAliases: false
});

const Todo = db.define('Todo', {
  description: { type: Sequelize.STRING }
});

const Subtask = db.define('Subtask', {
  description: { type: Sequelize.STRING }
});

Todo.hasMany(Subtask);

module.exports = { db, Todo, Subtask };