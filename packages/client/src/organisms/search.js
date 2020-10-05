import React, { useCallback, useState } from "react";
import { Button, Input } from "atoms";
import { Redirect } from "react-router-dom";
import Units from "molecules/units";
import { useSearchStateValue } from "context/searchContext";

const Search = () => {
    const { searchOn, state } = useSearchStateValue();
    const { searchOn: city } = state;
    const [searchOnCity, setSearchOnCity] = useState(city || "");
    const [redirect, setRedirect] = useState(false);

    const handleOnClick = useCallback(() => {
        searchOn(searchOnCity);
        setRedirect(true);
    }, [searchOnCity, searchOn]);

    const handleOnChange = useCallback(
        (event) => {
            setSearchOnCity(event.target.value);
        },
        [setSearchOnCity]
    );

    if (redirect) {
        return <Redirect to="/" push />;
    }

    return (
        <div className="mb-3">
            <h2>Settings</h2>
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
