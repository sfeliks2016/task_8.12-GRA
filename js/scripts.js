// plik Scripts.js GRA

var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
     pickPaper = document.getElementById('js-playerPick_paper'),
     pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

//--Wartości początkowe --
var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

// Kontenery

var newGameBtn = document.getElementById('js-newGameButton'),
    newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

// funkcja, ktora okresla stan gry 
// funkcja zalezna od zmiennej gameState

function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
      break;
    case 'ended':
        newGameBtn.innerText = 'Jeszcze raz';
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}

setGameElements(); // wywolanie funkcji

//Rozpoczęcie gry - zdefiniowanie funkcji newGame

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');



function newGame() {
  player.name = prompt('Graczu, wpisz swoje imię', 'imię gracza');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();

    playerNameElem.innerHTML = player.name;
    setGamePoints(); // ta funkcja powstała na koncu
  }

}

//Wybór gracza - wynik w konsoli

function playerPick(playerPick) {
    console.log(playerPick);
}

//Losowanie wyboru komputera
//var x = Math.random();
//Math.floor(Math.random()*3);
// przypisanie kazdej z liczb elementu gry

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

// wyswietlenie wyborów na stronie
var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult'),
    remis = document.getElementById('js-remis');

function playerPick(playerPick) {
    var computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    
}

//Logika gry i przyznawanie punktów

function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = remis.innerHTML = '';
    
  
  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock') ) {
        
        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Wygrana!";
        player.score++;
        //playerPointsElem.innerHTML = 'Punkty: '+ player.score;
        //setGamePoints();
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Wygrana!";
        computer.score++;
        console.log(computer.score);
        //computerPointsElem.innerHTML = 'Punkty: ' + computer.score;
        
    } else if (winnerIs == 'noone') {
        remis.innerHTML = "Remis!";
        
    }
    
    setGamePoints();
    show();
    
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    
    checkRoundWinner(playerPick, computerPick);
    
}


//Aktualizacja wyniku

function setGamePoints() {

    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
    
}


function show() {
    gameOver = document.getElementById('js-gameover');
    
    if (computer.score == 10){
        //gameOver.innerHTML = 'wygrał komputer!';
        alert('wygral komputer!');
        
       gameState='ended';
        setGameElements();
    } else if (player.score == 10) {
        //gameOver.innerHTML = 'Twoje zwyciestwo!!!';
        alert('Twoje zwyciestwo!');
       gameState='ended';
        setGameElements();
    }
   
}

