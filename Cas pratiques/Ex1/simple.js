//search h1
var firstname = "Hassan";
var lastname = "CHRAIBI";
var a= 2;
var resultat;
//resultat = "Mon prénon est:" +" "+ firstname + " et " + "mon nom de famille est:" + " " + lastname;
resultat = `Mon prénom est ${firstname} et mon nom de famille est ${lastname}`;
var base ;
var bool = Boolean(base);
/*var color = new Array();
color[0] = "rouge";
color[1] = "bleu";
color[2] = "vert";*/
var color = ["rouge","bleu","vert"];
var personne = new Object();
personne.name="Hassan";
personne.age = 29;
///////////
var heading = document.getElementById('heading');
heading.innerHTML = "une \"simple page HTML\"";
console.warn(typeof(heading));
console.log(typeof(firstname));
console.log(resultat)
console.log(++a)
console.log(bool)
console.log(color)
console.log(personne.age,personne.name)

