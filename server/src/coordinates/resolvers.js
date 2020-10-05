const fetchCoordinates = require("./model");

const resolveCoordinates = async (_, props) => {
    if (props) {
        return await fetchCoordinates(props);
    }
    return {};
};

module.exports = resolveCoordinates;
