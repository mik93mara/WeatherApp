import React from "react";
import { guidGenerator } from "./util";

const Radio = (props) => {
    const { label, value, checkedValue, onChange } = props;
    const id = `inputFor${guidGenerator()}`;

    const handleOnChange = () => {
        onChange();
    };
    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id={id}
                value={value}
                checked={checkedValue === value}
                onChange={handleOnChange}
            />
            <label className="form-check-label" htmlFor={id}>
                {label}
            </label>
        </div>
    );
};

export default Radio;
