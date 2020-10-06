import React, { useCallback, useState } from "react";
import get from "lodash/get";
import trim from "lodash/trim";
import { Button, Input, H } from "atoms";
import { Redirect } from "react-router-dom";
import Units from "molecules/units";
import { language } from "i18n";
import { useSearchStateValue } from "context/searchContext";

let prevUnits = "";

const Search = () => {
    const { searchOn, state } = useSearchStateValue();
    const location = get(state, "location", "");
    const units = get(state, "units", "");
    const [searchOnCity, setSearchOnCity] = useState(location || "");
    const [redirect, setRedirect] = useState(false);

    const handleOnClick = useCallback(() => {
        const currentCity = get(state, "location", "");
        if (
            searchOnCity &&
            (searchOnCity !== currentCity || prevUnits !== units)
        ) {
            searchOn(searchOnCity);
            prevUnits = units;
        }
        setRedirect(true);
    }, [searchOnCity, searchOn, units, prevUnits]);

    const handleOnChange = useCallback(
        (event) => {
            const searchValue = trim(event.target.value);
            if (searchValue) setSearchOnCity(searchValue);
        },
        [setSearchOnCity]
    );

    if (redirect) {
        return <Redirect to="/" push />;
    }

    return (
        <div className="mb-3">
            <H size={2}>{language["search.title"]}</H>
            <hr />
            <Input
                onChange={handleOnChange}
                placeholder="London or Chicago,Illinois"
                value={searchOnCity}
            />
            <Units />
            <Button onClick={handleOnClick}>Done</Button>
        </div>
    );
};

export default Search;
