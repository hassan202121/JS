var colors = ["rouge","bleu","vert"];

var personne = {
    firstname : "Hassan",
    Lastname : "Chraibi",
    age : 29,
    sexe : "M",
};

for (color in colors){
    console.log(`Ma couleur préférée est ${colors[color]}.`);
}

for (prop in personne){
    console.log(`La valeur de de la clé ${prop} est ${personne[prop]}.`);
}