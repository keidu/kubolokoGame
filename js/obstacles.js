class Customer {
    constructor(ctx, w, h) {
        this.ctx = ctx;
        this.gameWidth = w
        this.gameHeight = h
        this.image = new Image()
        this.image.src = "./images/customer1.png"
        this.width = 80
        this.height = 100
        this.posX = 10
        this.posY = 20
        this.velX = 4
        this.getBeer = document.createElement("audio")
        this.getBeer.src = "./sound/shout1.wav"
        this.getBeer.volume = 0.1
        // this.image.frames = 2;
        // this.image.framesIndex = 0;

    }
    draw() {
        this.ctx.drawImage(
            this.image,
            // this.image.framesIndex * Math.floor(this.image.width / this.image.frames), 0,
            // Math.floor(this.image.width / this.image.frames), this.image.height,
            this.posX,
            this.posY,
            this.width,
            this.height
        )
        // this.animate(framesCounter);
    }
    // animate(framesCounter) {
    //     if (framesCounter % 10 == 0) {
    //         this.image.framesIndex++
    //         if (this.image.framesIndex > 1) {
    //             this.image.framesIndex = 0
    //         }
    //     }
    // }

    move() {
        this.posX += this.velX
    }

}

class Customer2 extends Customer {
    constructor(ctx, w, h) {
        super(ctx, w, h)
        this.image = new Image()
        this.image.src = "./images/customer2.png"
        this.width = 80
        this.height = 80
        this.posY = 175
        this.velX = 2
        this.sound = "asd"
        this.getBeer.src = "./sound/shout3.wav"

    }
}
class Customer3 extends Customer {
    constructor(ctx, w, h) {
        super(ctx, w, h)
        this.image = new Image()
        this.image.src = "./images/customer3.png"
        this.posY = 315
        this.velX = 2
        this.getBeer.src = "./sound/shout3.wav"

    }
}
class Customer4 extends Customer {
    constructor(ctx, w, h) {
        super(ctx, w, h)
        this.image = new Image()
        this.image.src = "./images/customer4.png"
        this.width = 100
        this.height = 100
        this.posY = 462
        this.velX = 3
    }
}