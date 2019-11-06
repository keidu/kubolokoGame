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
    framesCounter: 0,
    score: undefined,
    keys: {
        GOUP: 38,
        GODOWN: 40,
        GOLEFT: 37,
        GORIGHT: 39,
        SHOOT: 65,
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

            //if (this.framesCounter > 99999) this.framesCounter = 1;
            this.framesCounter > 1000 ? this.framesCounter = 1 : null
            this.clear()
            this.generateCustomers1()
            this.generateCustomers2()
            this.generateCustomers3()
            this.generateCustomers4()
            this.collision1()
            this.collision2()
            this.collision3()
            this.collision4()
            //this.getBeerCollision()
            this.clearBullet()
            this.drawAll()
            this.moveAll()
            this.clearCustomers1();
            this.clearCustomers2();
            this.clearCustomers3();
            this.clearCustomers4();


        }, 1000 / this.fps);
    },
    reset() {
        this.background = new Background(this.ctx, this.width, this.height);
        this.player = new Player(this.ctx, this.canvas.width, this.canvas.height, this.keys);
    },
    drawAll() {
        this.background.draw();
        this.player.draw(this.framesCounter);
        this.customers1.forEach(customer => customer.draw())
        this.customers2.forEach(customer => customer.draw())
        this.customers3.forEach(customer => customer.draw())
        this.customers4.forEach(customer => customer.draw())
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

    generateCustomers1() {
        this.framesCounter % 250 == 0 ? this.customers1.push(new Customer(this.ctx, this.width, this.height)) : null
    },
    generateCustomers2() {
        this.framesCounter % 250 == 0 ? this.customers2.push(new Customer2(this.ctx, this.width, this.height)) : null
    },
    generateCustomers3() {
        this.framesCounter % 375 == 0 ? this.customers3.push(new Customer3(this.ctx, this.width, this.height)) : null
    },
    generateCustomers4() {
        this.framesCounter % 200 == 0 ? this.customers4.push(new Customer4(this.ctx, this.width, this.height)) : null
    },

    clearCustomers1() {
        this.customers1.forEach((cust, idx) => {
            cust.posX >= 850 ? this.customers1.splice(idx, 1) : null
        })
    },

    clearCustomers2() {
        this.customers2.forEach((cust, idx) => {
            cust.posX >= 850 ? this.customers2.splice(idx, 1) : null
        })
    },

    clearCustomers3() {
        this.customers3.forEach((cust, idx) => {
            cust.posX >= 850 ? this.customers3.splice(idx, 1) : null
        })
    },

    clearCustomers4() {
        this.customers4.forEach((cust, idx) => {
            cust.posX >= 850 ? this.customers4.splice(idx, 1) : null
        })
    },

    collision1() {
        for (let j = 0; j < this.player.bullets.length; j++) {
            for (let i = 0; i < this.customers1.length; i++) {
                let cust = this.customers1[i]
                let bull = this.player.bullets[j]
                if (this.player.bullets.length > 0 && this.customers1.length > 0 &&
                    cust.posX + cust.width >= bull.posX &&
                    cust.posX <= bull.posX + bull.width &&
                    cust.posY + cust.height >= bull.posY &&
                    cust.posY <= bull.posY + bull.height
                ) {
                    this.customers1.shift()
                    this.player.bullets.shift()
                }
            }
        }
    },
    collision2() {
        for (let j = 0; j < this.player.bullets.length; j++) {
            for (let i = 0; i < this.customers2.length; i++) {
                let cust = this.customers2[i]
                let bull = this.player.bullets[j]
                if (this.player.bullets.length > 0 && this.customers2.length > 0 &&
                    cust.posX + cust.width >= bull.posX &&
                    cust.posX <= bull.posX + bull.width &&
                    cust.posY + cust.height >= bull.posY &&
                    cust.posY <= bull.posY + bull.height
                ) {
                    this.customers2.shift()
                    this.player.bullets.shift()
                }
            }
        }
    },
    collision3() {
        for (let j = 0; j < this.player.bullets.length; j++) {
            for (let i = 0; i < this.customers3.length; i++) {
                let cust = this.customers3[i]
                let bull = this.player.bullets[j]
                if (this.player.bullets.length > 0 && this.customers3.length > 0 &&
                    cust.posX + cust.width >= bull.posX &&
                    cust.posX <= bull.posX + bull.width &&
                    cust.posY + cust.height >= bull.posY &&
                    cust.posY <= bull.posY + bull.height
                ) {
                    this.customers3.shift()
                    this.player.bullets.shift()
                }
            }
        }
    },
    collision4() {
        for (let j = 0; j < this.player.bullets.length; j++) {
            for (let i = 0; i < this.customers4.length; i++) {
                let cust = this.customers4[i]
                let bull = this.player.bullets[j]
                if (this.player.bullets.length > 0 && this.customers4.length > 0 &&
                    cust.posX + cust.width >= bull.posX &&
                    cust.posX <= bull.posX + bull.width &&
                    cust.posY + cust.height >= bull.posY &&
                    cust.posY <= bull.posY + bull.height
                ) {
                    this.customers4.shift()
                    //this.player.bullets.shift()
                    this.player.bullets[j].velX = 0

                }
            }
        }
    },
    getBeerCollision() {
        let beer = this.player.bullets[j]
        if (beer.posX + beer.width >= this.player.posX &&
            beer.posY + beer.height >= this.player.posY &&
            beer.posX <= this.player.posX + this.player.width &&
            beer.posY <= this.player.posY + this.player.height) {
            beer.shift()
        }
    },
}
