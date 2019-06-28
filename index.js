const { ApolloServer, PubSub } = require("apollo-server");
const mongoose = require("mongoose");

const { MONGODB } = require("./config");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const pubsub = new PubSub();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub }),
});

// connect to mongo
mongoose
  .connect(MONGODB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("successfully connected to DB");
    return server.listen({ port: 1234 });
  })
  .then(res => {
    console.log("Running at: ", res.url);
  });
