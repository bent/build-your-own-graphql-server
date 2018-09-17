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
    },
    deleteTodo(_, {id}) {
      return Todo.destroy({where: {id}}).then(() => {id})
    },
    createSubtask(_, {todoId, description}) {
      return Subtask.create({TodoId: todoId, description})
    },
    deleteSubtask(_, {id}) {
      return Subtask.destroy({where: {id}}).then(() => {id})
    }
  }
}