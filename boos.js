class Boss {

    constructor(x = 700, y = 200) {

        this.x = x;
        this.y = y;

        this.width = 120;
        this.height = 120;

        this.speed = 2;

        this.life = 100;

        this.image = new Image();

        this.image.src = "assets/imagens/enemy.png";
    }

    draw(ctx) {

        if (this.image.complete) {

            ctx.drawImage(
                this.image,
                this.x,
                this.y,
                this.width,
                this.height
            );
        }
    }

    follow(player) {

        if (player.x > this.x) {
            this.x += this.speed;
        }

        if (player.x < this.x) {
            this.x -= this.speed;
        }

        if (player.y > this.y) {
            this.y += this.speed;
        }

        if (player.y < this.y) {
            this.y -= this.speed;
        }
    }
}