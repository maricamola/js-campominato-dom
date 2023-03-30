//Creo const per selezionare il container, i levels e il btn
const container = document.querySelector('#container');
const playButton = document.querySelector('#play');
const level = document.querySelector('#level');
//Creo un array per i veri livelli
const levels = [100, 81, 49];

playButton.addEventListener('click', play);


function play(){
  console.log('play');
  reset();
}



//Creo il ciclo per generare i 100 square
for(let i = 1; i <= 100; i++ ){
  
  const firstSquare =  createSquare();
  
  //aggiungiamo un evento al 'click' 
  // 'this' ci serve per richiamare l'elemento che abbiamo     cliccato
  firstSquare.addEventListener('click', function(){
    this.classList.toggle('click')
  })
  container.appendChild(firstSquare)
}

/**********funzioni*************/

//Creo funzione per generare lo square

function createSquare() {
  const newSquare = document.createElement('div');
   //assegno nome alla classe square
  newSquare.className = 'square';
   //Aggiungo un evento per vedere il numero della casella selezionata in console.log

   //IndexOf restituisce un valore numerico che rappresenta la posizione dell'elemento nella stringa
    newSquare.addEventListener('click', function() {

    const parent = newSquare.parentNode;

    //Creo un array di tutti gli elementi figli di "parent"
    const squareNumber = Array.from(parent.children).indexOf(newSquare) +1;
    
    //Aggiungo al newsquare nell'HTML il numero
    newSquare.innerHTML= `<span> ${squareNumber}</span> `
  });
  
  return newSquare;
}


//Creo funzione per il bottone che dovrà mostrare il container

//RESET
function reset(){
  console.log('reset');
  container.innerHTML= '';
}
