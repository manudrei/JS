/*IF*/
if (true) { //Se la condizione è vera fa vedere a schermo 3 2 1 GO invece se falsa lo salta
    console.log("3 2 1 GO");
   }

  /* IF ELSE */
   let condition = false; //In questo caso è falsa e eseguirà l'istruzione else
   if (condition) {
    console.log("1");
   }  
   else{
    console.log("2");
   } 

/*ELSE IF STATEMENT */
let hour = 14;
if (hour < 12) { //Se è falsa passa avanti
 console.log("Good morning");
} else if (hour < 17) { //Se è vera fa vedere console.log se invece falsa lo salta
 console.log("Good afternoon");
}