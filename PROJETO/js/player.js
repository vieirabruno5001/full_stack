class Player {

    constructor(x, y) {

        this.x = x;
        this.y = y;

        this.width = 90;
        this.height = 90;

        this.speed = 5;
        this.dash = 12;

        this.life = 100;

        this.image = new Image();
        this.image.src = "player.png";
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

    move(keys, canvas) {

        if (keys["m"]) {
            this.speed = this.dash;
        } else {
            this.speed = 5;
        }

        if (keys["w"] && this.y > 0) {
            this.y -= this.speed;
        }

        if (keys["s"] && this.y + this.height < canvas.height) {
            this.y += this.speed;
        }

        if (keys["a"] && this.x > 0) {
            this.x -= this.speed;
        }

        if (keys["d"] && this.x + this.width < canvas.width) {
            this.x += this.speed;
        }
    }
}