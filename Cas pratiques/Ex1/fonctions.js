 function addnumbers (num1, num2, num3 = 1){
    resultat = num1 + num2 + num3;
    return resultat;
}
var addednumbers = addnumbers(75,8,2);
console.log(typeof(addnumbers));
console.log(addednumbers);

//immediately invoked fonction 

(function(num1, num2){
    var resultat = num1 + num2;
    console.log(resultat);
})(10,12);

//fonction à fléches 

((num1, num2)=>{
    var resultat = num1 + num2;
    console.log(resultat);
})(10,12);

// LET pour déclarer une variable

function addnumbers (num1, num2, num3 = 1){
    let resultat = num1 + num2 + num3;
    console.log(resultat);
}

addnumbers(10,5);

// const pour déclarer une variable

const FIRSTNAME = "Hassan";
console.log(FIRSTNAME);