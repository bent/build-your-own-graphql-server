const { ApolloServer, gql } = require("apollo-server")
const fs = require("fs")

const schema = fs.readFileSync("./schema.gql", "utf8")

const typeDefs = gql(schema)