let tab = [20, 12, 8, 9];
function average(note) {
    average = note.reduce((previous, current) => previous + current, 0) / note.length;
    console.log(average);
}
average(tab)
module.exports = average;
