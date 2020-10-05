import React, { useCallback, useState } from "react";
import { Button, Input } from "atoms";
import { useSearchStateValue } from "context/searchContext";

const Search = () => {
    const { searchOn } = useSearchStateValue();
    const [searchOnCity, setSearchOnCity] = useState("");

    const handleOnClick = useCallback(() => {
        searchOn(searchOnCity);
    }, [searchOnCity, searchOn]);

    const handleOnChange = useCallback(
        (event) => {
            setSearchOnCity(event.target.value);
        },
        [setSearchOnCity]
    );
    return (
        <div className="input-group mb-3">
            <Input
                onChange={handleOnChange}
                placeholder="London or Chicago,Illinois"
                value={searchOnCity}
            />
            <Button onClick={handleOnClick}>Search</Button>
        </div>
    );
};

export default Search;
