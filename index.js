const formatDate = (timeInSeconds) => {
    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    var time = '';

    hours = Math.floor(timeInSeconds / 3600);
    timeInSeconds = Math.floor(timeInSeconds % 3600);

    if (hours != 0) {
        time = hours + 'h';
    }

    minutes = Math.floor(timeInSeconds / 60);
    timeInSeconds = Math.floor(timeInSeconds % 60);

    if (minutes != 0) {
        time += ' ' + minutes + 'm';
    }

    seconds = timeInSeconds;

    if (seconds != 0) {
        time += ' ' + seconds + 's';
    }

    time = time.trim();

    if (time == '') time = 0 + 's';

    return time;
}

module.exports = formatDate;
