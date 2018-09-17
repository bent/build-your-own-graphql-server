const { Todo, Subtask } = require("./models")

module.exports = {
  Query: {
    getAllTodos() {
      return Todo.findAll();
    },
    getTodo(_, args) {
      return Todo.findById(args.id)
    }
  },
  Todo: {
    subtasks(todo) {
      return todo.getSubtasks();
    }
  },
  Mutation: {
    createTodo(_, {description}) {
      return Todo.create({description})
    }
  }
}