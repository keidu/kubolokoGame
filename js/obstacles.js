class Customer {
    constructor(ctx, w, h) {
        this.ctx = ctx;
        this.gameWidth = w
        this.gameHeight = h
        this.image = new Image()
        this.image.src = "./images/customera1.png"
        this.width = 100
        this.height = 100
        this.posX = 10
        this.posY = 20
        this.velX = 3.5
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
    move() {
        this.posX += this.velX
    }
}

class Customer2 extends Customer {
    constructor(ctx, w, h) {
        super(ctx, w, h)
        this.image = new Image()
        this.image.src = "./images/customera2.png"
        this.width = 80
        this.height = 80
        this.posY = 175
        this.velX = 2.5
    }
}
class Customer3 extends Customer {
    constructor(ctx, w, h) {
        super(ctx, w, h)
        this.image = new Image()
        this.image.src = "./images/customera3.png"
        this.posY = 315
        this.velX = 2
    }
}
class Customer4 extends Customer {
    constructor(ctx, w, h) {
        super(ctx, w, h)
        this.image = new Image()
        this.image.src = "./images/customera4.png"
        this.width = 100
        this.height = 100
        this.posY = 462
        this.velX = 3
    }
}