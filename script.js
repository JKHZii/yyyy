// Efecto de flores cayendo
const flowerField = document.getElementById('flowerField');
const flowers = ['🌸', '🌹', '🌺', '🌻', '🌼', '🌷', '💐', '🏵️'];

function createFlower() {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
    
    // Posición y animación aleatoria
    const startPos = Math.random() * 100;
    const duration = 5 + Math.random() * 10;
    const delay = Math.random() * 5;
    const size = 20 + Math.random() * 30;
    
    flower.style.left = `${startPos}%`;
    flower.style.animationDuration = `${duration}s`;
    flower.style.animationDelay = `${delay}s`;
    flower.style.fontSize = `${size}px`;
    
    flowerField.appendChild(flower);
    
    // Eliminar flor después de la animación
    setTimeout(() => {
        flower.remove();
    }, duration * 1000);
}

// Crear flores continuamente
for (let i = 0; i < 20; i++) {
    setTimeout(createFlower, i * 300);
}

setInterval(createFlower, 300);

// Efecto máquina de escribir
const text = "ERES LA MEJOR";
const animatedText = document.getElementById('animatedText');
let i = 0;

function typeWriter() {
    if (i < text.length) {
        animatedText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

// Botón interactivo
const showMoreBtn = document.getElementById('showMoreBtn');
const hiddenMessage = document.getElementById('hiddenMessage');
const bgMusic = document.getElementById('bgMusic');

showMoreBtn.addEventListener('click', () => {
    hiddenMessage.classList.toggle('show');
    showMoreBtn.textContent = hiddenMessage.classList.contains('show') 
        ? '¡Te amo mamá!' 
        : 'Abrir mi corazón';
    
    // Reproducir música al hacer clic (requiere interacción del usuario)
    bgMusic.volume = 0.3;
    bgMusic.play();
});

// Efecto 3D al mover el mouse
const card = document.querySelector('.card');

card.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

card.addEventListener('mouseenter', () => {
    card.style.transition = 'none';
});

card.addEventListener('mouseleave', () => {
    card.style.transition = 'transform 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
});

// Iniciar animación de texto después de 1 segundo
setTimeout(typeWriter, 1000);
