import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./gql/typeDefs.js";
import { resolvers } from "./gql/resolvers.js";

// Server setup
const PORT = 4000;
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
});

console.log(`Server running on port ${PORT}`);
