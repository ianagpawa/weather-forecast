import timestamp from 'unix-timestamp';
import WeatherIcons from "./icons.json";

export function fahrenheit(temp){
    return Math.round(((9/5) * (parseInt(temp, 10) - 273)) + 32);
}

export function getTime(dt){
        return timestamp.toDate(dt).toString().split(" ");
}

export function filterFunction(day){
    const time = parseInt(timestamp.toDate(day.dt).toString().split(" ")[4].slice(0,2), 10);
    return (11 <= time && time <= 13);
}


export function retrieveIcon(hour, code){
    function isDay(hour){
        return ((6 < hour) && (hour < 18));
    }

    if ((code === 741) || (code === 800) || (code === 804)){
        return isDay(hour) ? WeatherIcons[code]["day"] : WeatherIcons[code]["night"];
    } else {
        if ((( 710 < code ) && ( code < 800 )) || ((900 < code) && (code < 1000))){
            return WeatherIcons[code];
        } else {
            const prefix = isDay(hour) ? "day-" : "night-alt-"
            return prefix + WeatherIcons[code]
        }
    }
}
