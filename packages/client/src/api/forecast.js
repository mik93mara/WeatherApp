import { path } from "./config";

const forecastQuery = `query getFutureForecast($lat: Float!, $lon: Float!, $unit: String) {
    forecast(lat: $lat, lon: $lon, unit: $unit) {
        id
        dt
        main
        isCurrent
        description
        icon
        tempNow
        feelsLikeNow
        tempDay
        tempNight
        feelsLikeDay
        feelsLikeNight
    }
}`;

export const fetchForecast = async (lat, lon, unit) => {
    const futureForecast = await fetch(path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            query: forecastQuery,
            variables: {
                lat,
                lon,
                unit,
            },
        }),
    })
        .then((r) => r.json())
        .then((d) => {
            return d.data;
        })
        .catch((error) => error);
    console.log("fetchForecast -> futureForecast", futureForecast);
    return futureForecast;
};
