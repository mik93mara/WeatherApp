import React from "react";
import ForecastList from "molecules/forecastList";
import ForecastNow from "molecules/forecastNow";
import { H } from "atoms";
import { language } from "i18n";

const Card = (props) => {
    const {
        searchState: {
            state: { forecast, loading },
            state,
        },
    } = props;

    return (
        <>
            <H size={2}>{language["forecast.title"]}</H>
            <hr />

            <div className="card weather-card">
                <div className="card-body pb-3">
                    {loading ? (
                        <>
                            <i className="fa fa-cog fa-spin fa-3x fa-fw"></i>
                            <span className="sr-only">Loading...</span>
                        </>
                    ) : (
                        <>
                            <ForecastNow info={state} />
                            <ForecastList list={forecast} />
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Card;
