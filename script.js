const targetDate = new Date("2025-05-15T20:30:00"); // Fecha en la que se verán

function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById("fullCountdown").innerHTML = "¡Ya nos vemos! 🎉";
        document.getElementById("daysCountdown").innerHTML = "¡Ya nos vemos! 🎉";
        document.getElementById("hoursCountdown").innerHTML = "¡Ya nos vemos! 🎉";
        document.getElementById("secondsCountdown").innerHTML = "¡Ya nos vemos! 🎉";
        return;
    }

    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor(difference / (1000 * 60));
    const seconds = Math.floor(difference / 1000);

    const fullCountdown = `${months}m:${days % 30}d:${hours % 24}h:${minutes % 60}m:${seconds % 60}s`;
    const daysCountdown = `${days} días`;
    const hoursCountdown = `${hours} horas`;
    const secondsCountdown = `${seconds} segundos`;

    document.getElementById("fullCountdown").innerHTML = fullCountdown;
    document.getElementById("daysCountdown").innerHTML = daysCountdown;
    document.getElementById("hoursCountdown").innerHTML = hoursCountdown;
    document.getElementById("secondsCountdown").innerHTML = secondsCountdown;
}

setInterval(updateCountdown, 1000);
updateCountdown();
