const { graphqlHTTP } = require("express-graphql");
const graphql = require("graphql");
const forecastQuery = require("./src/forecast");
const coordinatesQuery = require("./src/coordinates");

const queryType = new graphql.GraphQLObjectType({
    name: "Query",
    fields: {
        forecast: forecastQuery,
        coordinates: coordinatesQuery,
    },
});

const schema = new graphql.GraphQLSchema({ query: queryType });

module.exports = graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "local",
});
