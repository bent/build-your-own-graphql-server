const { ApolloServer, gql } = require("apollo-server")
const fs = require("fs")
const resolvers = require("./resolvers")

const schema = fs.readFileSync("./schema.gql", "utf8")

const typeDefs = gql(schema)

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(() => console.log("Ready"))