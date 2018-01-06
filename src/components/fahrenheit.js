export function fahrenheit(temp){
    return Math.round(((9/5) * (parseInt(temp, 10) - 273)) + 32);
}
