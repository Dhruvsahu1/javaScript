let randomNumbr = parseInt(Math.random() * 100 + 1);



const Userinput = document.querySelector('#inputNumber');
const guessBtn = document.querySelector('#sub');
const guess = document.querySelector('#guess');
const GuessRemaining = document.querySelector('#NoOfGuess');
const lowOrHigh = document.querySelector('.lowOrHigh');
const result = document.querySelector('.messages');

const p = document.createElement('p');

let guessArr = [];
let guessCount = 1;
let playGame = true;

if (playGame) {
    guessBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const value = (parseInt(Userinput.value));
        console.log(value);

        validateGuess(value);
    })
}
function validateGuess(value) {
    if (isNaN(value)) {
        alert('Please enter a valid number');
    }
    else if (value < 1) {
        alert('Please enter a number greater than 0');
    } else if (value > 100) {
        alert('Please enter a number less than or equal to 100');
    } else {
        guessArr.push(value);
        if (guessCount > 9) {
            displayGuess(value);
            displayMessage(`Game Over! The number was ${randomNumbr}`);
            endGame();
        } else {
            displayGuess(value);
            checkGuess(value);
        }
    }
}

function checkGuess(value) {
    if (value === randomNumbr) {
        displayMessage(`Congratulations! You guessed it right`);
        endGame();
    } else if (value < randomNumbr) {
        displayMessage(`Your guess is low.`);
    }
    else if (value > randomNumbr) {
        displayMessage(`Your guess is high.`);
    }
}

function displayGuess(value) {

    guess.innerHTML += ` [${value}] `

    guessCount++;
    GuessRemaining.innerHTML = `You have ${11 - guessCount} guesses remaining`;
    Userinput.value = '';
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}
function endGame() {
    Userinput.value = '';
    Userinput.setAttribute('disabled', '');
    p.classList.add('button');
    console.log(p.classList.add('button'));
    
    p.innerHTML = '<h2 id="newGame">Play Again</h2>';
    result.appendChild(p);
    playGame = false;
    newGame();
}
function newGame() {
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', function (e) {
        randomNumbr = parseInt(Math.random() * 100 + 1);
        guessArr = [];
        guessCount = 1;
        playGame = true;
        guess.innerHTML = '';
        GuessRemaining.innerHTML = `You have ${11 - guessCount} guesses remaining`;
        Userinput.removeAttribute('disabled');
        result.removeChild(p);
        playGame = true;
    })
}

