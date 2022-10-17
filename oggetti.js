const cat ={
name: "Garfield" //L'oggetto viene così descritto, name:garfield è la proprietà dell'oggetto
};

const person = {
    name: "Joe Exotic" ,
    nickname: "Tiger King"     //L'oggetto ha due proprietà                  
   };

   const person1 = {
    name: "Joe Exotic",
    nickname: "Tiger King", //Le varie proprietà le posso elencare una sotto l'altra separata da una virgola
    occupation: "Zookeeper",
    age: 57
   };
   
   console.log(person1.nickname); //In questo caso visualizzo solo il nickname


   const person2 = {
    name: "Carole Baskin",
    occupation: "Animal Rights Activist",
    nationality: "USA",
    active: true
   };
   
   console.log(person2); //Vedo a schermo tutte le proprietà della person2