//Creo const per selezionare il container

const container = document.querySelector('#container');

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

    const squareNumber = Array.from(parent.children).indexOf(newSquare) + 1;
    console.log(`Hai selezionato la casella numero ${squareNumber}`);
  });

  return newSquare;
}


//Creo funzione per il bottone che dovrà mostrare il container

function showContainer() {
  const containerHide = document.querySelector('main-wrapper');

  if(containerHide === 'none'){
    containerHide = 'block';
  } else {
    containerHide === 'none'; 
  }
  console.log(containerHide)
}

//seconda opzione 

/*function showContainer() {
  let containerHide = document.getElementsByClassName("main-wrapper");
  containerHide.classList.toggle("none");
}*/
