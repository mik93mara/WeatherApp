const fetch = require("node-fetch");
const get = require("lodash/get");
const map = require("lodash/map");
const { oneCall } = require("../weather");

const futureDaysForecast = (futureDays) =>
    map(futureDays || [], (day) => {
        const forecast = get(day, "weather[0]");
        const dt = get(day, "dt");
        const tempDay = get(day, "temp.day");
        const tempNight = get(day, "temp.night");
        const feelsLikeDay = get(day, "feels_like.day");
        const feelsLikeNight = get(day, "feels_like.night");

        return {
            ...forecast,
            dt,
            tempDay,
            tempNight,
            feelsLikeDay,
            feelsLikeNight,
            tempNow: 0,
            feelsLikeNow: 0,
            isCurrent: false,
        };
    });

const fetchForecast = async (props) => {
    const { lat = null, lon = null, unit = "imperial" } = props;
    const response = await fetch(
        `${oneCall}&lat=${lat}&lon=${lon}&units=${unit}`
    ).then((r) => r.json());
    const todaysForecast = get(response, "current.weather[0]");
    const todaysDateTime = get(response, "current.dt");
    const futureDays = get(response, "daily", []);
    const currentTempNow = get(response, "current.temp");
    const currentFeelsLikeNow = get(response, "current.feels_like");

    return [
        {
            ...todaysForecast,
            dt: todaysDateTime,
            isCurrent: true,
            tempDay: 0,
            tempNight: 0,
            feelsLikeDay: 0,
            feelsLikeNight: 0,
            tempNow: currentTempNow,
            feelsLikeNow: currentFeelsLikeNow,
        },
        ...futureDaysForecast(futureDays),
    ];
};

module.exports = fetchForecast;
