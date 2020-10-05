const graphql = require("graphql");

const coordinatesType = new graphql.GraphQLObjectType({
    name: "Coordinates",
    fields: {
        city: { type: graphql.GraphQLString },
        lat: { type: graphql.GraphQLFloat },
        lon: { type: graphql.GraphQLFloat },
    },
});

module.exports = coordinatesType;
