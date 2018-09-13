Demo project for the 'Build Your Own GraphQL Server In 10 Minutes' talk

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