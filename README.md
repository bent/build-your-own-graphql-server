Demo project for the 'Build Your Own GraphQL Server In 10 Minutes' talk

0. Run `node setup.js`
1. `yarn add apollo-server graphql`
2. Create `server.js`
3. Add `const { ApolloServer, gql } = require("apollo-server")`
4. Add:
        const fs = require("fs")
        const schema = fs.readFileSync("./schema.gql", "utf8")
        const typeDefs = gql(schema)

5. Add:

        const server = new ApolloServer({
          typeDefs,
          resolvers
        })

6. Add `const resolvers = require("./resolvers")`; create `./resolvers.js`
7. Add `const { Todo, Subtask } = require("./models")` to `resolvers.js`
8. Add to `resolvers.js`:

        module.exports = {
          Query: {
          }
        }

9. Open `getAllTodos.gql`; Open `schema.gql`, go to `getAllTodos`

