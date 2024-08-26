//Recupero elementi del DOM

const resultGrid = document.getElementById('grid');
const playButton = document.querySelector('button');
const resultMode = document.getElementById('mode');
const form = document.querySelector('form');
const resultScore = document.getElementById('score');

//Funzione per generare le bombe
const generateBombs = (totalCells, totalBombs) => {
    const bombs = [];

    while(bombs.length < totalBombs){
        const num = (Math.floor(Math.random() * totalCells) + 1);
        if(!bombs.includes(num)){
            bombs.push(num);
        }
    }

    return bombs;
}


//Creo una variabile per tenere il punteggio
let score = 0;

const startGame = () =>{
    resultGrid.innerHTML = '';
    playButton.innerText = 'Ricomincia'

    //Stabilisco la quantità di quadrati da creare
    const squareNumber = resultMode.value;

    //Genero le bombe
    const totalBombs = 16;
    const maxScore = squareNumber - totalBombs;

    const bombs = generateBombs(squareNumber, totalBombs);
    console.log(bombs);
    
    //Faccio un ciclo for per creare la griglia
    for(let i = 0; i < squareNumber; i++){
        num = i + 1;
    
        //Creo il quadrato
        const content = createNode('div', 'square');

        content.innerText = num;

        //Lo rendo cliccabike
        content.addEventListener('click', function(){
            //Aumento il punteggio
            if(content.classList.contains('clicked')){
                return;
            }
            console.log(content.innerText);
            content.classList.add('clicked');

            if(bombs.includes(i + 1)){
                console.log('Hai perso! Hai totalizzato ' + score + ' punti');
                content.classList.add('bomb');
            }
            else{
                content.classList.add('safe');
                resultScore.innerText = ++score;
            }

        })

        //Gli assegno la sua dimensione
        content.classList.add('square-' + squareNumber);

        //Inserisco il quadrato nel DOM
        resultGrid.appendChild(content);
    }
}

form.addEventListener('submit', function(event){
    event.preventDefault();

    startGame();
})