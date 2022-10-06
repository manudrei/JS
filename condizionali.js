let nome='Luca';
let numero=15;

if(nome == 'Luca')
{
 console.log ('ciao sono luca');

}
else 
{
    console.log('ciao non solo luca');

}




if(nome == 'Luca')
{
 console.log ('ciao sono luca');

}
else if(nome == 'Marco') //else if possono essere infiniti
{
    console.log('ciao non solo luca');

}

else{

    console.log ('Ciao sono anonimo');
}

if (numero <20)
{
    if(numero %2 == 0)
    {
        console.log('numero pari');
    }
else
{
    console.log('numero dispari');
}
}

if (numero < 20 && numero %2 == 0) //esempio di AND devono essere verificate entrambe le condizioni
{
    console.log('ok');
}

if (numero < 20 || numero %2 == 0) //esempio di OR devono essere verificata una delle condizioni
{
    console.log('ok');
}

if (!(numero < 20)) //esempio di NOT 
{
    console.log('ok');
}

 switch (nome) //esempio di Switch sono esempi più if else in serie
 {
     case 'Luca':
         console.log ('Ciao Luca');
         break;         
     case 'Marco':
         console.log ('Ciao Marco');
         break;
     case 'Gap':
         console.log ('Ciao Gap');
         break;
    default: //è il nostro else quindi se non si verifica la condizione
         console.log ('Ciao sono anonimo');
         break;

 }


 let numero1 = 20;
 let nome1 = (numero1 < 20 ) ? "Luca" : "Leonardo"; //ternary operator è un si o no se la condizione è verificata oppure no la sintassi è questa (condizione) ? si : no;


 console.log(nome);