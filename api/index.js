const express = require("express");
const dbConnection = require("./config/db");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const resolvers = require("./resolvers");

(async function () {
  await dbConnection();

  const app = express();

  app.get(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      rootValue: resolvers,
      graphiql: true,
    })
  );

  app.post(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      rootValue: resolvers,
      graphiql: false,
    })
  );

  app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
  );
})();
