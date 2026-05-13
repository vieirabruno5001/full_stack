class Enemy {

      constructor(x, y) {

        this.x = x;
        this.y = y;

        this.width = 90;
        this.height = 90;

        this.speed = 5;
        this.dash = 12;

        this.life = 100;

        this.image = new Image();
        this.image.src = "enemy.png";
    }

    draw(ctx) {

        ctx.drawImage(
            this.image,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }


    follow(player, score) {

        this.speed = 2 + score / 100;

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