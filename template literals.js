const cake= `Apple`; //i leterals servono per aggiungere in modo semplice variabili e espressione in delle stringhe

const quantity = 20;
const price = 10;
const cost = `Total cost : ${quantity*price}`; //${} è un operatore literals
console.log(cost); //In questo caso visualizzo Total Cost:200

let old = `Superman`;//
let latest = `Startrek`;
let movies = `${old},${latest}`;
console.log(movies);