// add Age
const contact = { name: 'John', year: 1982, city: 'NYC', height: 183 };
contact.age = 36;
console.log(contact);

// Filtrer sur valeurs numériques 
const contact1 = { name: 'John', year: 1982, city: 'NYC', height: 183 };
const intVal = Object.values(contact1).filter(Number);
console.log(intVal);

//Duplicate Object
const contact2 = { name: 'John', year: 1982, city: 'NYC', height: 183 };
const contact3 = Object.assign({}, contact2);
contact3.age = 90;
console.log(contact2.age);//undefined


