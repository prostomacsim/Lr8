document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start');
    const playRoundButton = document.getElementById('start-game');

    startButton.addEventListener('click', startGame);
    playRoundButton.addEventListener('click', playRound);
});

function startGame() {
    const username = document.getElementById('username').value.trim();
    if (username === '') {
        alert('Enter your name!');
        return;
    }
    document.getElementById('user-name').textContent = username;
    document.getElementById('input-container').style.display = 'none';
    document.getElementById('game').style.display = 'block';
}

let userScore = 0;
let computerScore = 0;

function playRound() {
    const userNumber = Math.floor(Math.random() * 100) + 1;
    const computerNumber = Math.floor(Math.random() * 100) + 1;
    let result = '';

    if (userNumber > computerNumber) {
        userScore++;
        result = 'You won ';
    } else if (userNumber < computerNumber) {
        computerScore++;
        result = 'Computer won ';
    } else {
        result = 'Eternal war';
    }

    document.getElementById('user-number-text').textContent = userNumber;
    document.getElementById('computer-number-text').textContent = computerNumber;
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('result').textContent = result;

    if (userScore === 3 || computerScore === 3) {
        setTimeout(function() {
            if (userScore === 3) {
                alert('You are a winner!');
            } else {
                alert('You lost!');
            }
            resetGame();
        }, 100);
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    document.getElementById('user-score').textContent = userScore;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('user-number-text').textContent = '';
    document.getElementById('computer-number-text').textContent = '';
    document.getElementById('result').textContent = '';
    document.getElementById('username').value = '';
    document.getElementById('input-container').style.display = 'block';
    document.getElementById('game').style.display = 'none';
}
