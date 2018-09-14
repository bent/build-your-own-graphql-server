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

