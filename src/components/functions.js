import timestamp from 'unix-timestamp';
import WeatherIcons from "./icons.json";

export function fahrenheit(temp){
    return Math.round(((9/5) * (parseInt(temp, 10) - 273)) + 32);
}

export function filterFunction(day){
    const time = parseInt(timestamp.toDate(day.dt).toString().split(" ")[4].slice(0,2), 10);
    return (11 <= time && time <= 13);
}


export function retrieveIcon(hour, code){
    function isDay(hour){
        return ((6 < hour) && (hour < 18));
    }
    console.log(code);
    if (code === "800") {
        console.log('here');
    }
    if ((code === "741") || (code === "800") || (code === "804")){
        console.log(isDay(hour));
        console.log(WeatherIcons[code]["day"])
        return isDay(hour) ? WeatherIcons[code]["day"] : WeatherIcons[code]["night"];
    } else {
        const intCode = parseInt(code, 10);
        if ((( 710 < intCode ) && ( intCode < 800 )) || ((900 < intCode) && (intCode < 1000))){
            return WeatherIcons[code];
        } else {
            const prefix = isDay(hour) ? "day-" : "night-alt-"
            return prefix + WeatherIcons[code]
        }
    }
}
