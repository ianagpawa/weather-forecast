import axios from 'axios';

import API_KEY from './client_secrets'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` ;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const HANDLE_AXIOS_ERROR = 'HANDLE_AXIOS_ERROR';

function fetchWeatherSuccess(response){
    return {
        type: FETCH_WEATHER,
        payload: response
    };
}

function fetchWeatherError(error){
    const eUrl = `${ROOT_URL}&q=Tampa,us`;
    const eRequest = axios.get(eUrl);
    return {
        type: HANDLE_AXIOS_ERROR,
        payload: eRequest,
        error: true
    };
}

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return request
        .then((response) => {
            return fetchWeatherSuccess(response);
        })
        .catch((error) => {
            return fetchWeatherError(error);
        })

    // return {
    //     type: FETCH_WEATHER,
    //     payload: request
    // };
}
