// Contadores
const scores = {
    home: document.getElementById('score-home'),
    guest: document.getElementById('score-guest')
};

// Función para sumar puntos
function addPoints(team, points) {
    const scoreEl = scores[team];
    scoreEl.textContent = Number(scoreEl.textContent) + points;
}

// Temporizador
let seconds = 0;
let timerInterval = null;

function formatTime(sec) {
    const min = Math.floor(sec / 60);
    const s = sec % 60;
    return `${min.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

function updateTimer() {
    seconds++;
    document.getElementById('timer').textContent = formatTime(seconds);
}

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(updateTimer, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    pauseTimer();
    seconds = 0;
    document.getElementById('timer').textContent = "00:00";
}
