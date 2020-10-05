const graphql = require("graphql");

const forecastType = new graphql.GraphQLObjectType({
    name: "Forecast",
    fields: {
        id: { type: graphql.GraphQLString },
        dt: { type: graphql.GraphQLInt },
        main: { type: graphql.GraphQLString },
        description: { type: graphql.GraphQLString },
        icon: { type: graphql.GraphQLString },
        isCurrent: { type: graphql.GraphQLBoolean },
        tempNow: { type: graphql.GraphQLFloat },
        feelsLikeNow: { type: graphql.GraphQLFloat },
        tempDay: { type: graphql.GraphQLFloat },
        tempNight: { type: graphql.GraphQLFloat },
        feelsLikeDay: { type: graphql.GraphQLFloat },
        feelsLikeNight: { type: graphql.GraphQLFloat },
    },
});

module.exports = forecastType;
