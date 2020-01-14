const Game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    fps: 60,
    bullets: [],
    customers1: [],
    customers2: [],
    customers3: [],
    customers4: [],
    youWin: undefined,
    stoppedBeer: undefined,
    background: undefined,
    framesCounter: 0,
    score: undefined,
    lifes: 3,
    maxLifes: [],
    totalTime: 30,
    musicOff: true,
    backgroundMusic: new Audio("./sound/tortura3.mp3"),
    keys: {
        GOUP: 38,
        GODOWN: 40,
        GOLEFT: 37,
        GORIGHT: 39,
        SHOOT: 32,
    },

    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.width = window.innerWidth * 0.98;
        this.height = window.innerHeight * 0.98;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.start();

    },
    start() {
        this.reset()

        this.interval = setInterval(() => {

            this.framesCounter++;
            this.playLoop()
            this.framesCounter > 1000 ? this.framesCounter = 1 : null
            this.clear()
            this.generateCustomers(190, this.customers1, Customer)
            this.generateCustomers(350, this.customers2, Customer2)
            this.generateCustomers(417, this.customers3, Customer3)
            this.generateCustomers(150, this.customers4, Customer4)
            this.collision(this.customers1)
            this.collision(this.customers2)
            this.collision(this.customers3)
            this.collisionBar()
            this.getBeerCollision()
            this.clearBullet()
            this.drawAll()
            this.moveAll()
            this.chrono()
            this.clearCustomers(this.customers1);
            this.clearCustomers(this.customers2);
            this.clearCustomers(this.customers3);
            this.clearCustomers(this.customers4);
            this.lifes <= 0 ? this.gameOver() : null

        }, 1000 / this.fps);

    },

    reset() {
        this.background = new Background(this.ctx, this.width, this.height)
        this.player = new Player(this.ctx, this.canvas.width, this.canvas.height, this.keys)
        this.hearts = this.maxLifes.push(new Lifes(this.ctx, this.width, this.height, window.innerHeight * 0.30),
            new Lifes(this.ctx, this.width, this.height, window.innerHeight * 0.52),
            new Lifes(this.ctx, this.width, this.height, window.innerHeight * 0.75))

    },
    drawAll() {
        this.background.draw();
        this.player.draw(this.framesCounter)
        this.customers1.forEach(customer => customer.draw())
        this.customers2.forEach(customer => customer.draw())
        this.customers3.forEach(customer => customer.draw())
        this.customers4.forEach(customer => customer.draw())
        this.maxLifes.forEach(lifes => lifes.draw())
        this.drawTime()
    },
    playLoop() {
        this.backgroundMusic.volume = 0.3
        this.backgroundMusic.loop = true
        this.backgroundMusic.play()
    },
    stopMusic() {
        this.backgroundMusic.pause()
        this.backgroundMusic.currentTime = 0

    },
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    clearBullet() {
        this.player.bullets.forEach((asd, idx) => {
            asd.posX <= 20 ? this.player.bullets.splice(idx, 1) : null
        });
    },

    moveAll() {
        this.customers1.forEach(customer => customer.move())
        this.customers2.forEach(customer => customer.move())
        this.customers3.forEach(customer => customer.move())
        this.customers4.forEach(customer => customer.move())
    },

    generateCustomers(frames, custArray, custClass) {
        this.framesCounter % frames == 0 ? custArray.push(new custClass(this.ctx, this.width, this.height)) : null
    },

    clearCustomers(customer) {
        customer.forEach((cust, idx) => {
            cust.posX >= 830 ? customer.splice(idx, 1) && this.lifes-- && this.maxLifes.pop() : null
        })
    },

    collision(custArray) {
        for (let j = 0; j < this.player.bullets.length; j++) {
            for (let i = 0; i < custArray.length; i++) {
                let cust = custArray[i]
                let bull = this.player.bullets[j]
                if (this.player.bullets.length > 0 && custArray.length > 0 &&
                    cust.posX + cust.width >= bull.posX &&
                    cust.posX <= bull.posX + bull.width &&
                    cust.posY + cust.height >= bull.posY &&
                    cust.posY <= bull.posY + bull.height) {
                    getBeer = document.createElement("audio")
                    getBeer.src = "./sound/shout1.wav"
                    getBeer.volume = 0.1
                    getBeer.play()
                    custArray.shift()
                    this.player.bullets.shift()
                }
            }
        }
    },

    collisionBar() {
        for (let j = 0; j < this.player.bullets.length; j++) {
            for (let i = 0; i < this.customers4.length; i++) {
                let cust = this.customers4[i]
                let bull = this.player.bullets[j]
                if (this.player.bullets.length > 0 && this.customers4.length > 0 &&
                    cust.posX + cust.width >= bull.posX &&
                    cust.posX <= bull.posX + bull.width &&
                    cust.posY + cust.height >= bull.posY &&
                    cust.posY <= bull.posY + bull.height) {
                    this.stoppedBeer = bull
                    getBeer = document.createElement("audio")
                    getBeer.src = "./sound/shout4.wav"
                    getBeer.volume = 0.1
                    getBeer.play()
                    this.customers4.shift()
                    this.player.bullets[j].velX = 0
                }
            }
        }
    },

    getBeerCollision() {
        if (this.stoppedBeer) {
            if (this.stoppedBeer.posX + this.stoppedBeer.width > this.player.posX &&
                this.stoppedBeer.posY + this.stoppedBeer.height >= this.player.posY &&
                this.stoppedBeer.posY <= this.player.posY + this.player.height) {
                this.player.bullets.forEach((bullet, idx) => {
                    bullet == this.stoppedBeer ? this.player.bullets.splice(idx, 1) : null
                })
                this.stoppedBeer = undefined
            }
        }
    },
    drawTime() {
        this.ctx.font = "bold 50px Helvetica, Arial, sans-serif";
        this.ctx.fillStyle = "lightGrey"
        this.ctx.fillText(Math.floor(this.totalTime), window.innerHeight * 1.8, window.innerHeight * 0.17);
    },
    chrono() {
        if (this.framesCounter % 60 == 0 && this.totalTime >= -1) {
            this.totalTime--
        }
        else {
            this.totalTime
        }
        if (this.totalTime == -1) {
            this.youWin()
        }
    },
    youWin() {
        if (this.totalTime == -1) {
            this.background.youWin()
            clearInterval(this.interval)
            this.stopMusic()
            victoryMusic = document.createElement("audio")
            victoryMusic.src = "./sound/victoryMusic.mp3"
            victoryMusic.volume = 0.2
            victoryMusic.play()

        }
    },
    gameOver() {
        clearInterval(this.interval)
        this.background.finalDraw()
        this.stopMusic()
        gameOverMusic = document.createElement("audio")
        gameOverMusic.src = "./sound/gameOver.wav"
        gameOverMusic.volume = 0.2
        gameOverMusic.play()
        torture2 = document.createElement("audio")
        torture2.src = "./sound/gameOverMusic.mp3"
        torture2.volume = 0.2
        torture2.play()
    }
}