let sentence = "Bonjour, chers candidat comment vous allez aujourd'hui";

function countAcaracter(){   
    console.log("Le nombre d'occurrences de 'a' est :", sentence.split("a").length-1);
    
}

module.exports = countAcaracter();