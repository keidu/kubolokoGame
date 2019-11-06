class Player {
    constructor(ctx, w, h, keys) {
        this.ctx = ctx;
        this.gameWidth = w;
        this.gameHeight = h;
        this.image = new Image();
        this.image.src = "./images/player.png";
        this.width = 60;
        this.height = 100;
        this.bullets = [];
        this.posX = this.gameWidth * 0.8;
        this.posY = 50;
        this.vel = 150;
        this.keys = keys;
        this.setListeners();
    }

    draw() {
        this.ctx.drawImage(
            this.image,
            this.posX,
            this.posY,
            this.width,
            this.height,
        )
        this.bullets.forEach(bullet => bullet.draw())
        this.bullets.forEach(bullet => bullet.move());
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
        this.posY >= 500 && this.posX >= 100 ? this.posX -= this.vel : null
    }
    goRight() {
        this.posY >= 500 && this.posX <= 900 ? this.posX += this.vel : null
    }
    goUp() {
        this.posY >= 80 && this.posX >= 900 ? this.posY -= this.vel : null
    }
    goDown() {
        this.posY <= 350 && this.posY <= 350 ? this.posY += this.vel : null
    }
    shoot() {
        this.bullets.push(new Bullet(this.ctx, this.posX, this.posY, this.posY0, this.height));
        //console.log(this.bullets.maxBullets)
    }
}