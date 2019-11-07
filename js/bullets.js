class Bullet {
    constructor(ctx, x, y) {
        this.ctx = ctx
        this.posX = x;
        this.posY = y;
        this.velX = 8;
        this.image = new Image();
        this.image.src = "./images/beer.png";
        this.width = 50;
        this.height = 50;
        // this.maxBullets = 3;
    }

    draw() {
        this.ctx.drawImage(
            this.image,
            this.posX,
            this.posY,
            this.width,
            this.height,
        );
    }

    move() {
        this.posX -= this.velX
    }

}