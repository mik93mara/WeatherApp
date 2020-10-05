import React from "react";

const Badge = (props) => {
    const { title = "", value = "" } = props;
    return (
        <div>
            {title}&nbsp;
            <span className="badge badge-light badge-pill">{value}</span>
        </div>
    );
};

export default Badge;
