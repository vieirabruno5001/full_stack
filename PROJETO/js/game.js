const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const keys = {};

const player = new Player(100, 100);

const enemies = [];
const bullets = [];
const particles = [];


let score = 0;
let gameOver = false;

const stars = [];

for (let i = 0; i < 100; i++) {

    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2
    });
}


function spawnEnemy() {

    const x = Math.random() * (canvas.width - 40);
    const y = Math.random() * (canvas.height - 40);

    enemies.push(new Enemy(x, y));
}

setInterval(() => {

    if (!gameOver) {
        spawnEnemy();
    }

}, 2000);

function shoot() {

    bullets.push({
        x: player.x + player.width,
        y: player.y + player.height / 2,
        width: 18,
        height: 10,
        speed: 7
    });
}

function createParticles(x, y) {

    for (let i = 0; i < 10; i++) {

        particles.push({
            x: x,
            y: y,
            size: Math.random() * 5,
            speedX: (Math.random() - 0.5) * 6,
            speedY: (Math.random() - 0.5) * 6,
            life: 30
        });
    }
}

function updateParticles() {

    for (let i = 0; i < particles.length; i++) {

        const p = particles[i];

        p.x += p.speedX;
        p.y += p.speedY;

        p.life--;

        ctx.fillStyle = "darkgreen";
        ctx.fillRect(p.x, p.y, p.size, p.size);

        if (p.life <= 0) {
            particles.splice(i, 1);
            i--;
        }
    }
}

function updateBullets() {

    for (let i = 0; i < bullets.length; i++) {

        const bullet = bullets[i];

        bullet.x += bullet.speed;

        ctx.fillStyle = "#14532d";

        ctx.fillRect(
            bullet.x,
            bullet.y,
            30,
            15
        );

        ctx.strokeRect(
            bullet.x,
            bullet.y,
            30,
            15
        );

        ctx.fillStyle = "white";

        ctx.font = "12px Arial";

        ctx.fillText(
            "$",
            bullet.x + 10,
            bullet.y + 12
        );

        bullet.width = 30;
        bullet.height = 15;

        if (bullet.x > canvas.width) {

            bullets.splice(i, 1);

            i--;
        }
    }
}

function updateEnemies() {

    for (let i = 0; i < enemies.length; i++) {

        const enemy = enemies[i];

        enemy.follow(player, score);

        enemy.draw(ctx);

        if (
            player.x < enemy.x + enemy.width &&
            player.x + player.width > enemy.x &&
            player.y < enemy.y + enemy.height &&
            player.y + player.height > enemy.y
        ) {
            player.life -= 0.5;
        }

        for (let j = 0; j < bullets.length; j++) {

            const bullet = bullets[j];

            if (
                bullet.x < enemy.x + enemy.width &&
                bullet.x + bullet.width > enemy.x &&
                bullet.y < enemy.y + enemy.height &&
                bullet.y + bullet.height > enemy.y
            ) {

                createParticles(enemy.x, enemy.y);

                enemies.splice(i, 1);
                bullets.splice(j, 1);

                score += 10;

                i--;

                break;
            }
        }
    }
}


function drawHUD() {

    ctx.fillStyle = "white";
    ctx.font = "24px Arial";

    ctx.fillText("Vida: " + player.life, 20, 30);
    ctx.fillText("Score: " + score, 20, 60);

    ctx.fillStyle = "red";
    ctx.fillRect(20, 80, 200, 20);

    ctx.fillStyle = "lime";
    ctx.fillRect(20, 80, player.life * 2, 20);
}

function drawGameOver() {

    ctx.fillStyle = "white";
    ctx.font = "50px Arial";

    ctx.fillText("GAME OVER", 330, 250);

    ctx.font = "30px Arial";

    ctx.fillText(
        "Pressione R para reiniciar",
        280,
        320
    );
}

function restartGame() {

    player.life = 100;

    player.x = 100;
    player.y = 100;

    enemies.length = 0;
    bullets.length = 0;
    particles.length = 0;

    boss = null;

    score = 0;

    gameOver = false;

    update();
}

function update() {

    if (gameOver) {

        drawGameOver();

        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

   

    player.move(keys, canvas);

    player.draw(ctx);

    updateBullets();

    updateEnemies();

    updateParticles();

    drawHUD();

    if (player.life <= 0) {
        gameOver = true;
    }

    requestAnimationFrame(update);
}

window.addEventListener("keydown", (event) => {

    const key = event.key.toLowerCase();

    keys[key] = true;

    if (event.code === "Space") {
        shoot();
    }

    if (key === "r" && gameOver) {
        restartGame();
    }
});

window.addEventListener("keyup", (event) => {

    keys[event.key.toLowerCase()] = false;
});