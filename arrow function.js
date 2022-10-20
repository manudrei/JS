const greetings = () => 
{
const name = 'Elizabeth';
return 'Greetings ' + name; // le arrow function sono delle specie di shortcode delle varie funzioni
}; //Le arrow servono solo per snellire il codice

const getPrice =(total)=> //Abbiamo aggiunto un parametro alla arrow, se abbiamo solo un parametro possiamo omettere le parentesi
 {
 const discount = 0.10;
 return total - (discount * total);
};
console.log(getPrice(500)); //il risultato è 450


const getPrice1 = (total = 200, discount =3) => total - (discount / 100 * total); //In questo caso tramite l'arrow abbiamo ridotto di molto la sintassi della funzione
    console.log(getPrice()); //Il risultato è 194
