import React from "react";
import Card from "organisms/card";
import { useSearchStateValue } from "context/searchContext";

const Forecast = () => {
    const searchState = useSearchStateValue();
    return <Card searchState={searchState} />;
};

export default Forecast;
