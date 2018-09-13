const { db, Todo } = require("./models.js")

db.sync({ force: true }).then(() => Promise.all([
  Todo.create({description: "Feed the cat"}).then(todo => Promise.all([
    todo.createSubtask({description: "Get out the bowl"}),
    todo.createSubtask({description: "Open the can"})
  ])),
  Todo.create({description: "Buy some milk"}).then(todo => Promise.all([
    todo.createSubtask({description: "Get my wallet"}),
    todo.createSubtask({description: "Walk to the shop"})
  ]))
]))
