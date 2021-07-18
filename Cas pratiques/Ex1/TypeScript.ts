
// aucune association 
let a : any;

a= 5;

a= "HELLO";

// associer un type

let b : string;

b= "Hello";

// Racourcis ( TS devine automatiquement le type de la variable)

let c=3;

c= 5;

// Declarer une interface

interface User{
    id: Number;
    name: string;
}

let user1: User = {
    id: 1,
    name: "Hassan"
}

// Decalrer une classe

class  User{
    id: Number;
    name: string;
}

let user3 = new User();

let user2: User = {
    id: 1,
    name: "Hassan"
}
