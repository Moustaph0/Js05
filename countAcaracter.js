let sentence = "Bonjour, chers candidat comment vous allez aujourd'hui";

function countAcaracter(text){   
    console.log("Le nombre d'occurrences de 'a' est :", text.split("a").length-1);
    
}

countAcaracter(sentence);
module.exports = countAcaracter;
