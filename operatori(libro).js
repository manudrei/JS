/*
lista operatori
+
-
/
*
++ (incremento)
-- (decremento)
% (resto)
=== (operatore di comprazione)
!== (operatore di diversità)
>
<
<=
>=
*/


let pOp = "ciao";
let pIp = "Buondì";
console.log(pOp + pIp); //Fa una concatenazione, quindi visualizzo ciao boundì

console.log(10 === 11); //=== confronta i due numeri,  e risponde a schermo true o false. In questo caso sarà un false perchè i numeri sono diversi
console.log(10 !== 11); //In questo caso la risposta è true perchè i numeri sono diversi

//Se faccio un addizione tra una stringa e un numero o boolean riceverò sempre una stringa come risultato

/* OPERTATORI LOGICI

&& AND
|| OR
! NOT
*/
let likes = 5;
likes +=1;  //l'operatore += aggiunge il numero 1 alla variabile likes. Serve per non riscrivere la variabile cioè equivale a: likes=likes+1
console.log(likes); // A schermo vedo il numero 6

let like = 5;
likes -=1;  //l'operatore -= sottrae il numero 1 alla variabile likes. Serve per non riscrivere la variabile cioè equivale a: likes=likes-1
console.log(likes);