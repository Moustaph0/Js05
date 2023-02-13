const tab = [6,5,9,0,1,4,3,4,8];

function displayOrder(tableau) {
    tableau.sort();
    console.log(tableau);
}
module.exports = displayOrder(tab);