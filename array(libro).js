let colors;
colors= ['green', 'white', 'black']; //index array è 0=green, 1=white, 2=black
console.log(colors[2]); //Verrà visualizzato il colore black
let numColors;
numColors=colors.length;
console.log(numColors); //Verrà visualizzata la lunghezza dell'array cioè 3
colors[2]='beige'; //Aggiorna il valore dell'index 2 dell'array trasformandolo da black a beige


const toDo = ["call mom", "dishes"];
toDo.push("Ciao"); //Aggiunge la stringa ciao all'array
console.log(toDo);


const toDo1 = ["call mom", "dishes"];
toDo.pop(); //Toglie l'ultima stringa dall'array
console.log(toDo1);

const toDo2 = ["call mom", "dishes"];
let chore = toDo2.pop(); //Toglie la stringa dishes da toDo2 e l'assegna a chore
console.log(chore);