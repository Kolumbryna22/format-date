const calculateStylePoints = (styleNotes) => {
    var notes = styleNotes.sort();
    var points;

    // remove lowest note
    notes.shift();
    // remove highest note
    notes.pop();

    points = notes.reduce(function(total, num) {
        return total + num;
    });
    points = roundUp(points, 1);

    return points;
};

function roundUp(num, precision) {
    var roundValue;

    precision = Math.pow(10, precision);
    roundValue = Math.ceil(num * precision) / precision;

    return roundValue;
}

module.exports = calculateStylePoints;
