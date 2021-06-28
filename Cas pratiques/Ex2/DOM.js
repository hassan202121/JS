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

