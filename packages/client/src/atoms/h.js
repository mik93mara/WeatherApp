import React from "react";

const H = (props) => {
    const {
        size = 2,
        classname = "card-title font-weight-bold",
        children,
    } = props;
    if (size === 6) return <h6 className={classname}>{children}</h6>;
    if (size === 5) return <h5 className={classname}>{children}</h5>;
    if (size === 4) return <h4 className={classname}>{children}</h4>;
    if (size === 3) return <h3 className={classname}>{children}</h3>;
    return <h2 className={classname}>{children}</h2>;
};

export default H;
