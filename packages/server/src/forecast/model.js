const fetch = require("node-fetch");
const get = require("lodash/get");
const map = require("lodash/map");
const { oneCall } = require("../config");

const futureDaysForecast = (futureDays, unit) =>
    map(futureDays || [], (day) => {
        const forecast = get(day, "weather[0]");
        const dt = get(day, "dt");
        const tempDay = get(day, "temp.day");
        const tempNight = get(day, "temp.night");
        const feelsLikeDay = get(day, "feels_like.day");
        const feelsLikeNight = get(day, "feels_like.night");
        const windSpeedValue = get(day, "wind_speed");
        const humidity = `${get(day, "humidity")} %`;

        let windSpeedUnit = "miles/hour";
        if (unit === "metric") windSpeedUnit = "metre/sec";

        const windSpeed = `${windSpeedValue} ${windSpeedUnit}`;

        return {
            ...forecast,
            dt,
            tempDay,
            tempNight,
            feelsLikeDay,
            feelsLikeNight,
            tempNow: 999,
            feelsLikeNow: 999,
            isCurrent: false,
            windSpeed,
            humidity,
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
    const windSpeedValue = get(response, "current.wind_speed");
    const humidity = `${get(response, "current.humidity")} %`;

    let windSpeedUnit = "miles/hour";
    if (unit === "metric") windSpeedUnit = "metre/sec";

    const windSpeed = `${windSpeedValue} ${windSpeedUnit}`;

    return [
        {
            ...todaysForecast,
            dt: todaysDateTime,
            isCurrent: true,
            tempDay: 999,
            tempNight: 999,
            feelsLikeDay: 999,
            feelsLikeNight: 999,
            tempNow: currentTempNow,
            feelsLikeNow: currentFeelsLikeNow,
            windSpeed,
            humidity,
        },
        ...futureDaysForecast(futureDays, unit),
    ];
};

module.exports = fetchForecast;
