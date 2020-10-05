const fetchForecast = require("./model");

const resolveForecast = async (_, props) => {
    if (props) {
        return await fetchForecast(props);
    }
    return [];
};

module.exports = resolveForecast;
