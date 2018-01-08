import React from 'react';
import 'weather-icons/css/weather-icons.css';
import { fahrenheit } from '../components/functions';

export default (props) => {
    return (
            <div className="daily-weather col-sm-2">
                <h3>{props.weekday}</h3>
                <h4>{fahrenheit(props.temp)}&#8457;</h4>
                <i className={props.icon}></i>
                <p>{props.condition}</p>
            </div>
    );
}
