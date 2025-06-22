const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const startScreen = document.getElementById('start-screen');
const gameContainer = document.getElementById('game-container');
const checkBtn = document.getElementById('check-btn');
const guessInput = document.getElementById('guess-input');
const resultText = document.getElementById('result-text');
const attemptsText = document.getElementById('attempts-text');

let randomNumber;
let attempts;

function initGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    resultText.textContent = "";
    attemptsText.textContent = "ცდები: 0";
    guessInput.value = "";
    guessInput.disabled = false;
    checkBtn.disabled = false;
    restartBtn.classList.add('hidden');
}

startBtn.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    initGame();
});

checkBtn.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        resultText.textContent = "შეიყვანე სწორი რიცხვი (1-100)";
        return;
    }

    attempts++;
    attemptsText.textContent = `ცდები: ${attempts}`;

    if (userGuess === randomNumber) {
        resultText.textContent = `გილოცავ! გამოიცანი ${attempts} ცდაში 🎉`;
        guessInput.disabled = true;
        checkBtn.disabled = true;
        restartBtn.classList.remove('hidden');
    } else if (attempts >= 7) {
        resultText.textContent = `შენ წააგე 😢 სწორი რიცხვი იყო ${randomNumber}`;
        guessInput.disabled = true;
        checkBtn.disabled = true;
        restartBtn.classList.remove('hidden');
    } else if (userGuess < randomNumber) {
        resultText.textContent = "არასწორია. სცადე უფრო მაღალი რიცხვი ⬆️";
    } else {
        resultText.textContent = "არასწორია. სცადე უფრო დაბალი რიცხვი ⬇️";
    }
});

restartBtn.addEventListener('click', () => {
    initGame();
});



