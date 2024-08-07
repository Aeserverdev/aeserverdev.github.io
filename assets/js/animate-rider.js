const motor = document.querySelector('.box-rider');
const startButton = document.getElementById('startButton');
const speedSlider = document.getElementById('speedSlider');

let isPlaying = false;

startButton.addEventListener('click', () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
        motor.style.animationPlayState = 'running';
        startButton.textContent = 'Hentikan';
    } else {
        motor.style.animationPlayState = 'paused';
        startButton.textContent = 'Mulai';
    }
});

speedSlider.addEventListener('input', () => {
    motor.style.animationDuration = `${speedSlider.value * 1}s`;
});