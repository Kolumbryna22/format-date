const calculateStylePoints = (styleNotes) => {
    var notes = styleNotes.sort();
    var points = 0;

    // remove lowest note
    notes.shift();
    // remove highest note
    notes.pop();

    points += notes.map(value => value);

    return points;
};

module.exports = calculateStylePoints;
