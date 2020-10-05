import React from "react";

const Icon = (props) => {
    const { icon = "", size = 2 } = props;
    return <i className={`fa fa-${icon} fa-${size}x grey-text pr-2`}></i>;
};

export default Icon;
