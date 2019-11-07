class Lifes {
    constructor(ctx, w, h, y) {
        this.ctx = ctx;
        this.gameWidth = w
        this.gameHeight = h
        this.image = new Image()
        this.image.src = "images/lifes2.png"
        this.width = 90
        this.height = 90
        this.posX = this.gameWidth - 110
        this.posY = y
    }
    draw() {
        this.ctx.drawImage(
            this.image,
            this.posX,
            this.posY,
            this.width,
            this.height
        )
    }
}
