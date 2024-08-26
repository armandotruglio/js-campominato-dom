//Recupero elementi del DOM

const resultGrid = document.getElementById('grid');
const playButton = document.querySelector('button');
const resultMode = document.getElementById('mode');
const form = document.querySelector('form');


form.addEventListener('submit', function(event){
    event.preventDefault();

    //Stabilisco la quantità di quadrati da creare
    const squareNumber = resultMode.value;
    
    //Faccio un ciclo for per creare la griglia
    for(let i = 0; i < squareNumber; i++){
        num = i + 1;
    
        //Creo il quadrato
        const content = createNode('div', 'square');
    
        //Inserisco il numero corrispettivo all'interno
        content.innerText = num;

        //Lo rendo cliccabike
        content.addEventListener('click', function(){
            console.log(content.innerText);
            content.classList.add('clicked');
        })

        //Gli assegno la sua dimensione
        content.classList.add('square-' + squareNumber);

        //Inserisco il quadrato nel DOM
        resultGrid.appendChild(content);
    }
})