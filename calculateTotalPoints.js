const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
    const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
    const stylePoints = calculateStylePoints(styleNotes);
    var points;

    points = distancePoints + stylePoints + windFactor + gateFactor
    points = roundUp(points, 1);
  
    return points;
}

function roundUp(num, precision) {
    var roundValue;

    precision = Math.pow(10, precision);
    roundValue = Math.ceil(num * precision) / precision;

    return roundValue;
}
  
module.exports = calculateTotalPoints;
