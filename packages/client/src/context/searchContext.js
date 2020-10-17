import * as React from "react";
import { fetchForecast, fetchLatLong } from "api";

const SearchContext = React.createContext(undefined, undefined);

const initialState = {
    location: "",
    units: "imperial",
    coordinates: {},
    forecast: [],
    loading: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "SET_LOCATION":
            return { ...state, location: action.payload };
        case "SET_COORDINATES":
            return { ...state, coordinates: action.payload };
        case "SET_FORECAST":
            return { ...state, forecast: action.payload };
        case "SET_UNITS":
            return { ...state, units: action.payload };
        case "SET_LOADING":
            return { ...state, loading: action.payload };
        default:
            return state;
    }
}

const SearchProvider = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const fetchForecastApi = async (lat, lon) => {
        if (lat && lon) {
            const unit = state.units;
            const { forecast } = await fetchForecast(lat, lon, unit);
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
                type: "SET_LOADING",
                payload: true,
            });
            dispatch({
                type: "SET_FORECAST",
                payload: [],
            });
            dispatch({
                type: "SET_COORDINATES",
                payload: {},
            });
            dispatch({
                type: "SET_LOCATION",
                payload: city,
            });
            await fetchLatLongApi(city);
            dispatch({
                type: "SET_LOADING",
                payload: false,
            });
        }
    };

    const setUnits = (unit) => {
        if (unit) {
            dispatch({
                type: "SET_UNITS",
                payload: unit,
            });
        }
    };

    return (
        <SearchContext.Provider value={{ state, dispatch, searchOn, setUnits }}>
            {props.children}
        </SearchContext.Provider>
    );
};

const useSearchStateValue = () => React.useContext(SearchContext);

export { SearchProvider, SearchContext, useSearchStateValue };
