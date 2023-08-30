function solve(steps, foorPrint, speedKmH) {
    const speed = speedKmH * 1000 / 3600;
    const distance = steps * foorPrint;

    const rest = Math.floor(distance / 500)*60;
    const time = distance / speed +rest;

    const hours = Math.floor(time/60/60);
    const minutes = Math.floor((time - hours*3600)/60);
    const seconds = time - (hours*3600) - (minutes*60);

    return `${hours.toFixed(0).padStart(2,'0')}:${minutes.toFixed(0).padStart(2,'0')}:${seconds.toFixed(0).padStart(2,'0')}`
}
console.log(solve(4000, 0.60, 5));