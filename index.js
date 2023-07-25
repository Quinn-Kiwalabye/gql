const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema/type-defs');
const { resolvers } = require('./schema/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  try {
    const { url } = await server.listen();
    console.log(`Your API is running at: ${url} :)`);
  } catch (error) {
    console.error('Error starting the server:', error);
  }
}

startServer();
