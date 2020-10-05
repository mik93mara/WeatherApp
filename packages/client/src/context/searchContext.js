import * as React from "react";
import { fetchForecast, fetchLatLong } from "api";

const SearchContext = React.createContext(undefined, undefined);

const initialState = {
    location: "",
    coordinates: {},
    forecast: [],
};

function reducer(state, action) {
    switch (action.type) {
        case "SET_SEARCH_ON":
            return { ...state, searchOn: action.payload };
        case "SET_COORDINATES":
            return { ...state, coordinates: action.payload };
        case "SET_FORECAST":
            return { ...state, forecast: action.payload };
        default:
            return state;
    }
}

const SearchProvider = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const fetchForecastApi = async (lat, lon) => {
        if (lat && lon) {
            const { forecast } = await fetchForecast(lat, lon);
            dispatch({
                type: "SET_FORECAST",
                payload: forecast,
            });
        }
    };

    const fetchLatLongApi = async (city) => {
        if (city) {
            const { coordinates } = await fetchLatLong(city);
            dispatch({
                type: "SET_COORDINATES",
                payload: coordinates,
            });
            const { lat, lon } = coordinates;
            await fetchForecastApi(lat, lon);
        }
    };

    const searchOn = async (city) => {
        if (city) {
            dispatch({
                type: "SET_SEARCH_ON",
                payload: city,
            });
            await fetchLatLongApi(city);
        }
    };

    return (
        <SearchContext.Provider value={{ state, dispatch, searchOn }}>
            {props.children}
        </SearchContext.Provider>
    );
};

const useSearchStateValue = () => React.useContext(SearchContext);

export { SearchProvider, SearchContext, useSearchStateValue };
