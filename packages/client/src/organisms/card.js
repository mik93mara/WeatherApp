import React from "react";
import ForecastList from "molecules/forecastList";
import ForecastNow from "molecules/forecastNow";
import { H } from "atoms";

const Card = (props) => {
    const {
        searchState: {
            state: { forecast },
            state,
        },
    } = props;

    return (
        <>
            <H size={2}>Weather Forecast</H>
            <hr />

            <div className="card weather-card">
                <div className="card-body pb-3">
                    <ForecastNow info={state} />
                    <ForecastList list={forecast} />
                </div>
            </div>
        </>
    );
};

export default Card;
