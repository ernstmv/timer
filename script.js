const targetDate = new Date("2025-05-15T20:30:00"); // Fecha en la que se verán

function formatNumber(num) {
    return num < 10 ? "0" + num : num; // Si es menor a 10, agrega un 0 al inicio
}

function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById("fullCountdown").innerHTML = "¡Ya nos vemos! 🎉";
        document.getElementById("secondsCountdown").innerHTML = "¡Ya nos vemos! 🎉";
        return;
    }

    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor(difference / (1000 * 60));
    const seconds = Math.floor(difference / 1000);

    const fullCountdown = `${formatNumber(months)}:${formatNumber(days % 30)}:${formatNumber(hours % 24)}:${formatNumber(minutes % 60)}:${formatNumber(seconds % 60)}`;
    const secondsCountdown = `${seconds}`;

    document.getElementById("fullCountdown").innerHTML = fullCountdown;
    document.getElementById("secondsCountdown").innerHTML = secondsCountdown;
}

setInterval(updateCountdown, 1000);
updateCountdown();
