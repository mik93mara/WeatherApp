const graphql = require("graphql");
const coordinatesType = require("./typeDef");
const resolveCoordinates = require("./resolvers");

const query = {
    type: coordinatesType,
    args: {
        city: { type: graphql.GraphQLString },
        state: { type: graphql.GraphQLString },
    },
    resolve: resolveCoordinates,
};

module.exports = query;
