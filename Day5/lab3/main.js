
let clockInterval;
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('startClockBtn');
    const clockDiv = document.getElementById('clockDisplay');


    button.addEventListener('click', () => {
        if (clockInterval) {
            clearInterval(clockInterval);
        }

        clockInterval = setInterval(() => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            clockDiv.textContent = `${hours}:${minutes}:${seconds}`;
        }, 1000);
    });
});

document.addEventListener('keydown', (event) => {
    if (event.altKey && event.key.toLowerCase() === 'w') {
        console.log('Alt + W detected: Stopping the clock.');
        event.preventDefault();   
        clearInterval(clockInterval);
        alert('Clock stopped');
    }
});
