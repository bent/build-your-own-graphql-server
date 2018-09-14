const { Todo, Subtask } = require("./models")

module.exports = {
  Query: {
    getAllTodos() {
      return Todo.findAll();
    }
  }
}