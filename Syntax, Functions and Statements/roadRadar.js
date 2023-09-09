function solve(speed, area) {
    let limit = 0;

    switch (area) {
        case 'motorway': limit = 130;
            break;
        case 'interstate': limit = 90;
            break;
        case 'city': limit = 50;
            break;
        case 'residential': limit = 20;
            break;
    }
    
    const speeding = speed - limit;
    if (speeding <= 0) {
        return `driving ${speed} km/h in a ${limit} zone`;
    }
    let status = " ";
    if (speeding <= 20) {
        status = 'speeding';
    } else if (speeding > 20 && speeding <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless drivnig';
    }

    return `The speed ${speeding} km/h faster than allowed speed of ${limit} -${status} `
}
console.log(solve(40, 'city'));