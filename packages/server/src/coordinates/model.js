const fetch = require("node-fetch");
const { weather } = require("../config");

const getLocation = (city, state) => {
    let location = "";
    if (city && state) location = `${city},${state}`;
    else if (city) location = `${city}`;
    return location;
};

const getCoordinates = async ({ city, state }) => {
    const location = getLocation(city, state);
    if (location) {
        const response = await fetch(
            `${weather}&q=${location}`
        ).then((r) => r.json());
        const { coord = {}, name = "" } = response || {};
        return { ...coord, city: name };
    }
    return {};
};

module.exports = getCoordinates;
