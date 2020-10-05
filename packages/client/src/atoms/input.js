import React from "react";

const Input = (props) => {
    const {
        className = "form-control",
        placeholder = "",
        value = "",
        onChange = () => {},
    } = props;

    const handleOnChange = (value) => {
        onChange(value);
    };

    return (
        <input
            type="text"
            className={className}
            placeholder={placeholder}
            aria-label={placeholder}
            aria-describedby="basic-addon2"
            value={value}
            onChange={handleOnChange}
        />
    );
};

export default Input;
