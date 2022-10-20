var age = 18; //Una variabile fuori da una funzione o blocco è nella posizione del Global Scope
var access = true;
if (age === 18) {
 var access = false;
}
console.log(access); /*In questo caso dichiaro la variabile access due volte,
posso accederci perchè la dichiarazione var se ne frega del assegnamento nel blocco 
Con let e const questo giochino non potrei farlo*/
