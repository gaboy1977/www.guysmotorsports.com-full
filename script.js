// Add countdown functionality
const countdownElement = document.getElementById('countdown');
const nextRaceDate = new Date('July 27, 2024 19:00:00').getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = nextRaceDate - now;

    if (distance < 0) {
        countdownElement.innerHTML = 'EXPIRED';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    countdownElement.innerHTML = `${days} Days : ${hours} Hours : ${minutes} Minutes`;
}, 1000);
