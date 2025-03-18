const targetDate = new Date("2025-05-15T20:30:00"); // Fecha objetivo
const startDate = new Date("2025-01-26T00:00:00"); // Fecha de inicio (cuando comenzó la cuenta regresiva)
const totalDuration = targetDate - startDate; // Duración total en milisegundos

function formatNumber(num) {
    return num < 10 ? "0" + num : num; // Si es menor a 10, agrega un 0 al inicio
}

function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById("fullCountdown").innerHTML = "¡Ya nos vemos! 🎉";
        document.getElementById("secondsCountdown").innerHTML = "¡Ya nos vemos! 🎉";
        document.getElementById("mario").style.left = "90vw"; // Lo dejamos al final
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

    // **Mover a Mario**
    const elapsedTime = now - startDate; // Tiempo transcurrido desde el 26 de enero
    const progress = elapsedTime / totalDuration; // Proporción del tiempo total
    const maxPosition = 90; // Máximo desplazamiento en vw

    document.getElementById("mario").style.left = `${progress * maxPosition}vw`;
}

document.getElementById("mario").addEventListener("click", function () {
    // 🟢 1️⃣ Mario brinca
    this.style.transition = "transform 0.3s ease";
    this.style.transform = "translateY(-20px)";
    setTimeout(() => this.style.transform = "translateY(0)", 300);

    // 🔴 2️⃣ Generar corazones animados
    for (let i = 0; i < 100; i++) { // Cantidad de corazones
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement("img");
    heart.src = "assets/heart.png"; // Asegúrate de que el archivo está en la misma carpeta
    heart.classList.add("heart"); // Agrega la clase CSS
    document.body.appendChild(heart);

    // Posición inicial (centro inferior)
    heart.style.left = "50vw";
    heart.style.bottom = "0px";

    // Movimiento aleatorio hacia arriba con ligera desviación lateral
    const randomX = (Math.random() - 0.5) * 80; // Desviación horizontal aleatoria (-20vw a +20vw)
    const randomY = Math.random() * 40 + 50; // Altura aleatoria (suben entre 50vh y 90vh)

    setTimeout(() => {
        heart.style.transform = `translate(${randomX}vw, -${randomY}vh) scale(1.2)`;
        heart.style.opacity = "0"; // Desaparecen al final
    }, 100);

    // Elimina el corazón después de la animación
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

setInterval(updateCountdown, 1000);
updateCountdown();
