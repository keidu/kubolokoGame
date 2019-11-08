class Player {
    constructor(ctx, w, h, keys) {
        this.ctx = ctx;
        this.gameWidth = w;
        this.gameHeight = h;
        this.image = new Image();
        this.image.src = "./images/barman.png";
        this.width = window.innerWidth * 0.08
        this.height = window.innerHeight * 0.2
        this.bullets = [];
        this.posX = this.gameWidth * 0.8;
        this.posY = window.innerHeight * 0.06;
        this.vel = window.innerHeight * 0.23;
        this.keys = keys;
        this.setListeners();
        this.image.frames = 2;
        this.image.framesIndex = 0;

        this.movingSound = document.createElement("audio")
        this.movingSound.src = "./sound/jump2.mp3"
        this.doSound = document.createElement("audio")
        this.doSound.src = "./sound/beer.mp3"
        this.cantDo = document.createElement("audio")
        this.cantDo.src = "./sound/cantDo.wav"
    }

    draw(framesCounter) {
        this.ctx.drawImage(
            this.image,
            this.image.framesIndex * Math.floor(this.image.width / this.image.frames), 0,
            Math.floor(this.image.width / this.image.frames), this.image.height,
            this.posX,
            this.posY,
            this.width,
            this.height)
        this.bullets.forEach(bullet => bullet.draw())
        this.bullets.forEach(bullet => bullet.move());
        this.animate(framesCounter);
    }

    animate(framesCounter) {
        if (framesCounter % 20 == 0) {
            this.image.framesIndex++
            if (this.image.framesIndex > 1) {
                this.image.framesIndex = 0
            }
        }
    }


    setListeners() {
        document.onkeydown = e => {
            switch (e.keyCode) {
                case Game.keys.GOLEFT:
                    this.goLeft()
                    break
                case Game.keys.GORIGHT:
                    this.goRight()
                    break
                case Game.keys.GOUP:
                    this.goUp()
                    break
                case Game.keys.GODOWN:
                    this.goDown()
                    break
                case Game.keys.SHOOT:
                    this.shoot()
                    break
            }
        }
    }
    goLeft() {
        this.posY >= window.innerHeight * 0.6 && this.posX >= window.innerWidth * 0.1 ? this.posX -= this.vel : null
        this.movingSound.volume = 0.1
        this.movingSound.play()
    }
    goRight() {
        this.posY >= window.innerHeight * 0.6 && this.posX <= window.innerWidth * 0.7 ? this.posX += this.vel : null
        this.movingSound.volume = 0.1
        this.movingSound.play()
    }
    goUp() {
        this.posY >= window.innerWidth * 0.1 && this.posX >= window.innerWidth * 0.7 ? this.posY -= this.vel : null
        this.movingSound.volume = 0.1
        this.movingSound.play()
    }
    goDown() {
        this.posY <= window.innerWidth * 0.4 && this.posY <= window.innerWidth * 0.7 ? this.posY += this.vel : null
        this.movingSound.volume = 0.1
        this.movingSound.play()

    }
    shoot() {
        this.bullets.length < 1 ? this.doSound.play() && this.bullets.push(new Bullet(this.ctx, this.posX, this.posY, this.posY0, this.height)) : this.cantDo.play() && null
        this.doSound.volume = 0.1
        this.cantDo.volume = 0.1

    }
}