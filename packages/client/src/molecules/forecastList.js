import React from "react";
import { Img, Badge } from "atoms";
import { getDayOfWeek, getMonthDay } from "utils";

const ForecastList = (props) => {
    const { list = [] } = props;

    return (
        <ul className="list-group">
            {list.map((dayForecast, i) => {
                const {
                    dt,
                    icon,
                    isCurrent,
                    tempDay,
                    tempNight,
                    tempNow,
                    feelsLikeNow,
                } = dayForecast;
                const day = getDayOfWeek(dt);
                return isCurrent ? (
                    <li
                        key={dt}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        <div className="h3">Now</div>
                        <Img src={icon} />
                        <Badge title="Temp" value={tempNow} />
                        <Badge title="Feels Like" value={feelsLikeNow} />
                    </li>
                ) : (
                    <li
                        key={dt}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        <div>
                            <Badge title={day} value={getMonthDay(dt)} />
                        </div>
                        <Img src={icon} />
                        <Badge title="Heigh" value={tempDay} />
                        <Badge title="Low" value={tempNight} />
                    </li>
                );
            })}
        </ul>
    );
};

export default ForecastList;
