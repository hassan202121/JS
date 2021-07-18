//selection element by ID
var header = document.getElementById("mainHeader");

console.log(header);

// Selection element by Class
var active = document.getElementsByClassName("active");

console.log(active);

// Selection element by balise HTML

var link = document.getElementsByTagName("a");

console.log(link);

// Selection element by Paragraphe

var par = document.getElementsByTagName("p");

console.log(par);

// selection un seul element par pragraphe

var pageContent = document.getElementById("pageContent");
var par = pageContent.getElementsByTagName("p");

console.log(par);

// selection CSS

var selected = document.querySelector('#mainHeader');
console.log(selected);

// selection CSS un seul element

var footer = document.querySelector('#mainFooter p');
console.log(footer);

// selection CSS plusieurs element Li ( par défaut ressort un seul element)
/*var li = document.querySelector('#mainHeader li');
console.log(li); */
var li = document.querySelectorAll('#mainHeader li');

console.log(li);


// afficher le nombre d'éléments 
var main = document.querySelector('#pageContent main');
console.log(`L'élément main possède ${main.children.length} enfants`);

// Modifier un element dans le DOM

var mainP = document.querySelector('#pageContent main p');
mainP.setAttribute('align', 'center');
console.log(mainP);

//ou bien 

/*var mainP = document.querySelector('#pageContent main p');
mainP.align ='right';
console.log(mainP);*/

// Créer de nouveaux éléments 
// Ajouter un élément dans ul 

var elema = document.createElement('a');
elema.href = 'produit.html';
var linklabel = document.createTextNode('produits');
elema.appendChild(linklabel);
var lielem = document.createElement('li');
lielem.appendChild(elema);
document.querySelector('#mainNav ul').appendChild(lielem);

// Changer image via Javascript

var pagecontent = document.getElementById('pageContent');
pagecontent.style.backgroundImage = 'url(./images/image-3.jpg)';
console.log(pagecontent);



