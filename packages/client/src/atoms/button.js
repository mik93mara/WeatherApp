import React from "react";

const Button = (props) => {
    const {
        type = "button",
        classname = "btn btn-primary",
        onClick = () => {},
        children,
    } = props;

    const handleOnClick = (value) => {
        onClick(value);
    };

    return (
        <div className="col-12">
            <button className={classname} type={type} onClick={handleOnClick}>
                {children}
            </button>
        </div>
    );
};

export default Button;
