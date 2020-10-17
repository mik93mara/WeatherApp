import React from "react";
import { guidGenerator } from "utils";

const Input = (props) => {
    const {
        classname = "form-control mb-1",
        placeholder = "",
        value = "",
        onKeyDown = () => {},
        onChange = () => {},
    } = props;

    const handleOnChange = (value) => {
        onChange(value);
    };
    const handleOnKeyDown = (event) => {
        if (event.key && event.key === "Enter") {
            onKeyDown(event);
        }
    }
    const id = `inputFor${guidGenerator()}`;
    return (
        <div className="form-group">
            <label htmlFor={id}>Enter Location</label>

            <input
                type="text"
                className={classname}
                placeholder={placeholder}
                aria-label={placeholder}
                id={id}
                aria-describedby="basic-addon2"
                value={value}
                onKeyDown={handleOnKeyDown}
                onChange={handleOnChange}
            />
        </div>
    );
};

export default Input;
