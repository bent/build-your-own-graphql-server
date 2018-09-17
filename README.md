Demo project for the 'Build Your Own GraphQL Server In 10 Minutes' talk

0. Run:
        yarn install
        node setup.js

  Open `server.js`

5. Add:
        const typeDefs = gql(schema)

        const server = new ApolloServer({
          typeDefs,
          resolvers
        })

        server.listen().then(() => console.log("Ready"))

9. Open `getAllTodos.gql`
10. Add to `resolvers.js`:

        getAllTodos() {
          return Todo.findAll();
        }

12. Run `yarn start`
13. Reload http://localhost:3000
14. Open `getTodo.gql`
15. Add to `resolvers.js`:

        getTodo(_, args) {
          return Todo.findById(args.id)
        }

16. Reload http://localhost:3000, watch it die
17. Add to `resolvers.js`:

        Todo: {
          subtasks(todo) {
            return todo.getSubtasks();
          }
        }

18. Reload http://localhost:3000, watch it work
19. Open `createTodo.gql`
20. Add to `resolvers.js`:

        Mutation: {
          createTodo(_, {description}) {
            return Todo.create({description})
          }
        }

21. Reload http://localhost:3000, add a todo
