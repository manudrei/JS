let data= ['Milano','Roma'];
data.push ('Firenze'); //ho aggiunto all'array un elemento in più, serve per aggiungere elementi
data.pop(); //toglie l'ultimo elemento dell'array
data.unshift ('Firenze'); //aggiunge all'array l'elemento firenze ma all'inizio dell'array
data.shift(); //toglie il primo elemento dell'array

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