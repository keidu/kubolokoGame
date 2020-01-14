class Customer {
    constructor(ctx, w, h) {
        this.ctx = ctx;
        this.gameWidth = w
        this.gameHeight = h
        this.image = new Image()
        this.image.src = "./images/cust1copy.png"
        this.width = window.innerWidth * 0.1
        this.height = window.innerWidth * 0.1
        this.posX = window.innerHeight * 0.10
        this.posY = window.innerHeight * 0.01
        this.velX = 4
        this.getBeer = document.createElement("audio")
        this.getBeer.src = "./sound/shout1.wav"
        this.getBeer.volume = 0.1
        this.image.frames = 2;
        this.image.framesIndex = 0;

    }
    draw() {
        this.ctx.drawImage(
            this.image,
            this.image.framesIndex * Math.floor(this.image.width / this.image.frames), 0,
            Math.floor(this.image.width / this.image.frames), this.image.height,
            this.posX,
            this.posY,
            this.width,
            this.height
        )
        this.animate(Game.framesCounter);
    }
    animate(framesCounter) {
        if (framesCounter % 20 == 0) {
            this.image.framesIndex++
            if (this.image.framesIndex > 1) {
                this.image.framesIndex = 0
            }
        }
    }

    move() {
        this.posX += this.velX
    }

}

class Customer2 extends Customer {
    constructor(ctx, w, h) {
        super(ctx, w, h)
        this.image = new Image()
        this.image.src = "./images/cust2copy.png"
        this.image.frames = 2
        this.image.framesIndex = 0
        this.width = window.innerWidth * 0.1
        this.height = window.innerWidth * 0.1
        this.posY = window.innerWidth * 0.12
        this.velX = 2


    }
}
class Customer3 extends Customer {
    constructor(ctx, w, h) {
        super(ctx, w, h)
        this.image = new Image()
        this.image.src = "./images/cust3.png"
        this.image.frames = 2
        this.image.framesIndex = 0
        this.posY = window.innerWidth * 0.234
        this.velX = 2
        this.getBeer.src = "./sound/shout3.wav"

    }
}
class Customer4 extends Customer {
    constructor(ctx, w, h) {
        super(ctx, w, h)
        this.image = new Image()
        this.image.src = "./images/cust4.png"
        this.image.frames = 2
        this.image.framesIndex = 0
        this.posY = window.innerWidth * 0.338
        this.velX = 3
    }
}