import timestamp from 'unix-timestamp';
import WeatherIcons from "./icons.json";

export function fahrenheit(temp){
    return Math.round(((9/5) * (parseInt(temp, 10) - 273)) + 32);
}

export function filterFunction(day){
    const time = parseInt(timestamp.toDate(day.dt).toString().split(" ")[4].slice(0,2), 10);
    return (11 <= time && time <= 13);
}


export function retrieveIcon(time, code){
    function isDay(time){
        const hour = parseInt(time, 10);
        return ((6 < hour) && (hour < 18));
    }

    if ((code === "741") || (code === "800") || (code === "804")){
        return isDay(time) ? WeatherIcons["day"] : WeatherIcons["night"];
    } else {
        const intCode = parseInt(code, 10);
        if ((( 710 < intCode ) && ( intCode < 800 )) || ((900 < intCode) && (intCode < 1000))){
            return WeatherIcons[code];
        } else {
            const prefix = isDay(time) ? "day-" : "night-alt-"
            return prefix + WeatherIcons[code]
        }
    }
}
