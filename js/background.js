class Background {
    constructor(ctx, w, h) {
        this.ctx = ctx
        this.width = w
        this.height = h
        this.image = new Image()
        this.image.src = "./images/barra1.jpg"
        this.final = new Image()
        this.final.src = "./images/untitled.png"
        this.win = new Image()
        this.win.src = "./images/youWin.jpg"

        this.posX = 0
        this.posY = 0
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }
    finalDraw() {
        this.ctx.drawImage(this.final, 0, 0)
    }
    youWin() {
        this.ctx.drawImage(this.win, 0, 0)
    }
}


