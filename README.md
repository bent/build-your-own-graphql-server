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

