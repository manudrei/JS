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