const calculateDistancePoints = (distance, hillSize, kPoint) => {
    var points = hillSize === 'mamute' ? 120 : 60;
    var deltaDistance = distance - kPoint;

    switch(hillSize) {
        case 'normal':
            points += deltaDistance * 2;
            break;
        case 'big':
            points += deltaDistance * 1.8;
            break;
        case 'mamute':
            points += deltaDistance * 1.2;
            break;        
    };
    
    points = roundUp(points, 1);

    return points;
};

function roundUp(num, precision) {
    var roundValue;

    precision = Math.pow(10, precision);
    roundValue = Math.ceil(num * precision) / precision;

    return roundValue;
}

module.exports = calculateDistancePoints;
