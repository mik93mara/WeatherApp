import React from "react";
import { guidGenerator } from "./util";

const Input = (props) => {
    const {
        classname = "form-control mb-1",
        placeholder = "",
        value = "",
        onChange = () => {},
    } = props;

    const handleOnChange = (value) => {
        onChange(value);
    };
    const id = `inputFor${guidGenerator()}`;
    return (
        <div className="form-group">
            <label htmlFor={id}>Password</label>

            <input
                type="text"
                className={classname}
                placeholder={placeholder}
                aria-label={placeholder}
                id={id}
                aria-describedby="basic-addon2"
                value={value}
                onChange={handleOnChange}
            />
        </div>
    );
};

export default Input;
