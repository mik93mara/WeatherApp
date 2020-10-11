import { path } from "./config";

const latLongQuery = `query getLatLong($city: String!, $state: String) {
    coordinates(city: $city, state: $state) {
        lat
        lon
        city
    }
}`;

export const fetchLatLong = async (city) => {
    const futureLatLong = await fetch(path, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            query: latLongQuery,
            variables: {
                city,
            },
        }),
    })
        .then((r) => r.json())
        .then((d) => {
            return d.data;
        })
        .catch((error) => error);
    return futureLatLong;
};
