import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
    return (
        <div className="card weather-card">
            <div className="card-body pb-3">
                <div className="d-flex justify-content-between">
                    <h4 className="card-title font-weight-bold">Warsaw</h4>
                    <div><Link to="/settings"><i className="fa fa-cog fa-2x grey-text pr-2"></i> Settings</Link></div>
                </div>
                <p className="card-text">Mon, 12:30 PM, Mostly Sunny</p>
                <div className="d-flex justify-content-start">
                    <p className="display-1 degree">23</p>
                    <img
                        src="http://openweathermap.org/img/wn/10d@4x.png"
                        width="100"
                        height="100"
                    />
                </div>
                <div className="d-flex justify-content-between mb-4">
                    <p>
                        <i className="fa fa-tint fa-2x text-info pr-2"></i>
                        3% Precipitation
                    </p>
                    <p>
                        <i className="fa fa-leaf fa-2x grey-text pr-2"></i>
                        21 km/h Winds
                    </p>
                </div>

                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-around align-items-center">
                        Monday
                        <div>
                            <img
                                src="http://openweathermap.org/img/wn/10d@2x.png"
                                width="50"
                                height="50"
                            />
                        </div>
                        <div>
                            High&nbsp;
                            <span className="badge badge-light badge-pill">
                                14
                            </span>
                        </div>
                        <div>
                            Low&nbsp;
                            <span className="badge badge-light badge-pill">
                                14
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Card;
