import React from 'react';
import 'weather-icons/css/weather-icons.css';
import { fahrenheit } from '../components/fahrenheit';

export default (props) => {
    return (
            <li>
                <h3>{props.day}</h3>
                <h2>{fahrenheit(props.temp)}&#8457;</h2>
                <i className={props.icon}></i>
                <p>{props.condition}</p>
            </li>
    );
}
