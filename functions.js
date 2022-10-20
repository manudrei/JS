function(Ciao){     //Come si dichiare una funzione


}


function displayWinners(first, second) { //Le funzioni servono per richiamare alcune operazioni tanto usate
    console.log("1st: " + first);
    console.log("2nd: " + second);
   }
   displayWinners("Amy","Sam");


function isRentingAge(age) //Funzione con dentro un if
{
if (age >= 21) 
{
console.log("Approved");
 }
}
isRentingAge(26);

function isLying(boolean) {
    console.log("Welcome to the Lie Detector 3000");
    if (boolean === false) {
     console.log("He's lying");
    }
   }
   isLying(false);
   
   
   
   
   function multiplyByTen(number) { //il tipo di variabile è un number
    return number * 10; //Ritorna il risultato moltiplicato 10
    console.log("This won't get executed"); //Qualsiasi cosa dopo un return non viene eseguito
    }
    const result = multiplyByTen(29); 
    console.log(result); //risultato è 290

    function getDiscount(age) {
        if (age >= 65) 
        {
         return "50% OFF"; 
        }
        return "0% OFF";
       }
       const discount = getDiscount(67);
       console.log(discount); //essendo discount maggiore di 65 visualizza a schermo 50% OFF
    
       function getDiscount(age) {
        if (age <= 18) {
         return "50% OFF";
        } else if (age >= 65) {
         return "30%";
        }
        
       return "Full price";
       
       }
       
       const discount1 = getDiscount(25); //in questo caso visualizziamo full price
       console.log(discount1);

       
       
       
       function displayPageNumbers(page) {
        for (let i = 1; i <= 20; i++) {
         console.log(page+i); //visualizziamo la parola page seguito da un numero da 1 a 20
        }
       }
       displayPageNumbers("Page ");

       function displayYears(start, end) {
        for (let i = start; i <= end; i++) { //abbiamo due variabili start e end
         console.log(i);
        }
       }
       
       displayYears(1998,2000);