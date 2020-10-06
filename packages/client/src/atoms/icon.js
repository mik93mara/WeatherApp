import React from "react";

const Icon = (props) => {
    const { icon = "", size = 2, testid } = props;
    return (
        <i
            data-testid={testid}
            className={`fa fa-${icon} fa-${size}x grey-text pr-2`}
        ></i>
    );
};

export default Icon;
