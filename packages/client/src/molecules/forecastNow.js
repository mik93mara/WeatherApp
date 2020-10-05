import React from "react";
import { Link } from "react-router-dom";
import get from "lodash/get";
import { getDayTime } from "utils";
import { Img, H } from "atoms";

const ForecastNow = (props) => {
    const { info } = props;
    const location = get(info, "coordinates.city", "");
    const icon = get(info, "forecast[0].icon", "");
    const time = getDayTime(get(info, "forecast[0].dt", ""));
    const temp = get(info, "forecast[0].tempNow", "");
    const description = get(info, "forecast[0].description", "");
    const humidity = get(info, "forecast[0].humidity", "");
    const windSpeed = get(info, "forecast[0].windSpeed", "");
    const units = get(info, "units", "");

    return (
        <>
            {!location && (
                <H size={3}>
                    <div className="d-flex justify-content-center align-items-center">
                        <div>No results found! Please try again</div>
                        <Link to="/settings">
                            <i className="fa fa-cog fa-2x grey-text pr-2"></i>{" "}
                            {units === "imperial" ? "\u00b0F" : "\u00b0C"}
                        </Link>
                    </div>
                </H>
            )}
            {location && (
                <>
                    <div className="d-flex justify-content-between">
                        <h4 className="card-title font-weight-bold">
                            {location}
                        </h4>
                        <div>
                            <Link to="/settings">
                                <i className="fa fa-cog fa-2x grey-text pr-2"></i>{" "}
                                {units === "imperial" ? "\u00b0F" : "\u00b0C"}
                            </Link>
                        </div>
                    </div>

                    <p className="card-text">
                        {time} {description}
                    </p>
                    <div className="d-flex justify-content-start">
                        <p className="display-1 degree">{temp}</p>
                        <Img src={icon} size={4} />
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                        <p>
                            <i className="fa fa-tint fa-2x text-info pr-2"></i>
                            {humidity} Humidity
                        </p>
                        <p>
                            <i className="fa fa-leaf fa-2x grey-text pr-2"></i>
                            {windSpeed} Winds
                        </p>
                    </div>
                </>
            )}
        </>
    );
};

export default ForecastNow;
