const fahrenheit = [72, 68, 70, 74, 77, 75, 79];
const celsius = [];
for (const element of fahrenheit) { //Prende gli elementi dall'array fahrenheit e li va ad inserire dopo un operazione nell'array Celsius
 let c = (element - 32) * (5/9);
 celsius.push(c);
}
console.log(celsius);

const fahrenheit1 = [72, 68, 70, 74, 77, 75, 79];
const celsius1 = fahrenheit1.map(function(){}); //l'istruzione .map va a modificare ogni tipo di elemento nell'array tramite una funzione che decidiamo noi
console.log(celsius);

const queue = ["Sarah", "Hank", "Anna", "Beatrice"];
const displayQueue = queue.map(function(element,index) { //In questo caso inseriamo proprio la funzione
 return index + ": " + element;
});
console.log(displayQueue);

const testScores = [72, 95, 90, 71, 75, 79];
const A = [];
for (const element of testScores) {
 if (element >= 90) {
  A.push(element);
 }
}
console.log(A); //usa l'istruzione push per estrapolare i numeri più grandi di 90 dal array iniziale

const testScores1 = [72, 95, 90, 71, 75, 79];
const A1 = testScores.filter(function(element) {
return element >= 90;
});
console.log(A1); //In questo caso usiamo la funzione .filter per estrapolare i numeri più grandi di 90
//La funzione può avere un secondo elemento che è appunto index

const values = [4, 3, 2, 1];
const factorial = values.reduce(function(prev, curr) {
 return prev * curr;
});
console.log(factorial); //reduce riduce l'intero array ad un numero
//prev indica l'elemento precedente invece curr quello corrente.
//Nella funzione potremmo aggiungere un terzo elemento cioè index
