// Obtendo o canvas e o contexto
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


// Carregando a imagem
const img = new Image();
img.src = 'bola.png'; // Você pode substituir essa URL por sua própria imagem
img.onload = () => {
    // Ajusta a posição inicial da imagem para que ela seja desenhada quando a imagem carregar
    drawImageAtMousePosition(0, 0);
};

// Função para desenhar a imagem centralizada no ponteiro do mouse
function drawImageAtMousePosition(x, y) {
    // Calculando a posição para centralizar a imagem no ponteiro
    const imgWidth = 50;
    const imgHeight = 50;
    const posX = x - imgWidth / 2;
    const posY = y - imgHeight / 2;

    // Prevenindo que a imagem saia do canvas
    const maxX = canvas.width - imgWidth;
    const maxY = canvas.height - imgHeight;
    const constrainedX = Math.min(Math.max(0, posX), maxX);
    const constrainedY = Math.min(Math.max(0, posY), maxY);

    // Limpando o canvas antes de desenhar a imagem
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenhando a imagem no canvas
    ctx.drawImage(img, constrainedX, constrainedY, imgWidth, imgHeight);
}

// Função para capturar a posição do mouse
canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    drawImageAtMousePosition(mouseX, mouseY);
});


