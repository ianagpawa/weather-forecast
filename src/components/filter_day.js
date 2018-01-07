import timestamp from 'unix-timestamp';

export function filterDay(time){
    const hour = parseInt(timestamp.toDate(time).toString().split(" ")[4].slice(0,2));
    return (hour >= 11) && (hour <=13);
}
