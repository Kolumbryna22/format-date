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

    return points;
};

module.exports = calculateStylePoints;
