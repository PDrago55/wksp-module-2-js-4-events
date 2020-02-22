const body = document.querySelector('body');
const startButton = document.getElementById('start-button');
const timer = document.getElementById('timer');
const gameBoard = document.getElementById('game-board');
const notificaton = document.getElementById('notification');
const header = document.querySelector('header')
const NUM_BUTTONS = Math.floor(Math.random() * 10) + 1;
const GAME_TIME = 5000; // in miliseconds
///let's do what we know///

const clickedState = [];

function checkArray(arr) {
    return arr.every(function(item) {
        return item
    });
}

function endGame() {
    notification.style.height = '200px';
    notification.style.paddingTop = '74px';
    if (checkArray(clickedState)) {
        notification.innerText = "You Win!!!!";
        notification.style.background = 'green';
    } else {
        notification.innerText = "You Lose...";
        notification.style.background = 'red';
    }
    for (let i = 0; i < NUM_BUTTONS; i++) {
        document.getElementById(`btn-${i}`).removeEventListener('click', toggleColor);
    }
}

function toggleColor(event) {
    const buttonId = event.target.id;
    document.getElementById(buttonId).classList.toggle('green');
        // get id
    const id = buttonId.split('-')[1];
        // toggle clickedState value
    clickedState[id] = !clickedState[id];
    }
    
// creating the randomly placed and selected buttons//

function turnGreen(event){
    const change = event.target.id;
    document.getElementById(change).classList.toggle('green');
}

for (i = 1; i <=6; i++) {
    const gameBtn = document.createElement('button');
    gameBtn.innerText = i;
    gameBtn.id = `btn-${i}`;
    gameBoard.appendChild(gameBtn);

    // new added code //
    gameBtn.style.top = `${Math.random() * 80}vh`;
    gameBtn.style.left = `${Math.random() * 80}vw`;

    gameBtn.addEventListener('click', turnGreen);
}


/// countdown clock//
function startGame()  {
    startButton.remove();

    timer.innerText = GAME_TIME / 1000;
    let seconds = GAME_TIME - 1000;
    const countdown = setInterval(function() {
        if (seconds < 1) {
            clearInterval(countdown);
            endGame();
        }
        timer.innerText = seconds / 1000;
        seconds -= 1000;
    }, 1000)};
