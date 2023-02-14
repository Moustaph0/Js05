tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function displayNumber(tableau) {
    for(let i = 0; i < tableau.length; i++) {
        console.log(tableau[i]);
    }
}

displayNumber(tab);
module.exports = displayNumber;
