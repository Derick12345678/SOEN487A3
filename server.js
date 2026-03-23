const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  });

  await server.start();

  server.applyMiddleware({ app, path: '/graphql' });

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  const PORT = 4000;

  app.listen(PORT, () => {
    console.log(`Frontend UI available at http://localhost:${PORT}/`);
    console.log(`GraphQL Playground available at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer().catch(error => {
  console.error('Failed to start server:', error);
});
