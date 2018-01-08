import timestamp from 'unix-timestamp';

export function fahrenheit(temp){
    return Math.round(((9/5) * (parseInt(temp, 10) - 273)) + 32);
}

export function filterFunction(day){
    const time = parseInt(timestamp.toDate(day.dt).toString().split(" ")[4].slice(0,2), 10);
    return (11 <= time && time <= 13);
}
