const { graphqlHTTP } = require("express-graphql");
const graphql = require("graphql");
const forecast = require("./src/forecast");
const coordinates = require("./src/coordinates");

const queryType = new graphql.GraphQLObjectType({
    name: "Query",
    fields: {
        forecast,
        coordinates,
    },
});

const schema = new graphql.GraphQLSchema({ query: queryType });

module.exports = graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "local",
});
