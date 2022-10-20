function somma() {
    var z = 11 + 5;
    return z;
    }
    var risultato = somma();

    
    let nome;   //dichiarazione della variabile di nome "nome"
                // quando diamo un nome di una variabile possiamo usare numeri, lettere maiuscole e minuscole e underscore

    
    let nome1 = 'Manuel';  //inizializzazione di una variabile

                //dichiarare una variabile si puo' fare con let o var
    
    nome = 'Luca'; //aggiornamento della variabile

    //Le variabili possono essere imizializzate o aggiornate con tipi: numeri, float (numeri con virgola), stringhe, boolean (true o false), array. oggetti

    let collezione = ['Luca', 'Edoardo', 'Gino']; //esempio di array, al posto delle stringhe posso usare numeri, l'array ha un indice che parte da 0 dal primo elemento
    //Luca ha indice 0, Edoardo 1 e Gino 2


    let persona ={                  //dichiariazione variabile oggetto
        nome: 'Edoardo',
        cognome: 'Random',
        codiceFiscale: 'dgsdhgdshgsdhghs'
    }
    

const uomo = 'Gino'; // dichiarazione di una costante, la quale non puo' essere più cambiata nel codice
var surname = "Smith"; //Ha il vantaggio rispetto a const e let che la variabile può essere ridichiarata più di una volta


function readDiary() {
    const myDiary = "Dear diary, today...";
   }
   console.log(myDiary); //Dirà che la variabile non è definita perchè è dentro la funzione
