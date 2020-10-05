const graphql = require("graphql");
const forecastType = require("./typeDef");
const resolveForecast = require("./resolvers");

const query = {
    type: new graphql.GraphQLList(forecastType),
    args: {
        lat: { type: graphql.GraphQLFloat },
        lon: { type: graphql.GraphQLFloat },
        unit: { type: graphql.GraphQLString },
    },
    resolve: resolveForecast,
};

module.exports = query;
