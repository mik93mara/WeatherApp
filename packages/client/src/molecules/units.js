import React, { useCallback, useState } from "react";
import Radio from "atoms/radio";
import { useSearchStateValue } from "context/searchContext";

const Units = () => {
    const {
        setUnits,
        state: { units },
    } = useSearchStateValue();
    const [checkedValue, setCheckedValue] = useState(units);
    const handleClick = useCallback((unit) => {
        setCheckedValue(unit);
        setUnits(unit);
    }, []);
    return (
        <div className="col-12 mb-1">
            <Radio
                label="Metric"
                value="metric"
                checkedValue={checkedValue}
                onChange={(e) => handleClick("metric")}
            />
            <Radio
                label="Imperial"
                value="imperial"
                checkedValue={checkedValue}
                onChange={(e) => handleClick("imperial")}
            />
        </div>
    );
};

export default Units;
