import React from "react";

const Image = (props) => {
    const { src, size = 2, testid, alt="N.A" } = props;
    let height = "50";
    let width = "50";
    if (size === 4) {
        height = "100";
        width = "100";
    }
    if (!src) {
        return null;
    }
    return (
        <div>
            <img
                alt={alt}
                data-testid={testid}
                src={`http://openweathermap.org/img/wn/${src}@${size}x.png`}
                width={width}
                height={height}
            />
        </div>
    );
};

export default Image;
