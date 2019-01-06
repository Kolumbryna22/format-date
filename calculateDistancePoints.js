const calculateDistancePoints = (distance, hillSize, kPoint) => {
    var points = hillSize === 'mamute' ? 120 : 60;
    var deltaDistance = distance - kPoint;

    switch(hillsize) {
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

    return points;
};

module.exports = calculateDistancePoints;
