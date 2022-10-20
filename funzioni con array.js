const one = [91, 66, 77, 84, 68]; //Dichiariamo due array
const two = [81, 66, 78, 88, 98];

function compareArrays(one, two) { 
 for (let i = 0; i < one.length; i++) { //parte da 0 fino al numero della lunghezza degli array
  if (one[i] === two[i]) { //Compara gli elementi dell'array
   console.log("Common element:", one[i]); //Visualizzo 66
  }
 }
 return false;
}
compareArrays(one, two);