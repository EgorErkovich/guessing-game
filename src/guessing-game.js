class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.num = 0;
    }
    setRange(min, max) {
        this.arr = [];
        this.min = min;
        this.max = max;
        for (let i = this.min; i <= this.max; i++) {
            this.arr.push(i);
        }
    }

    guess() {
        this.num = this.arr[Math.floor(this.arr.length / 2)] 
        return this.num;
    }

    lower() {
        this.arr = [];
        this.max = this.num;
        for (let i = this.min; i <= this.max; i++) {
            this.arr.push(i);
        }
    }

    greater() {
        this.arr = [];
        this.min = this.num;
        for (let i = this.min; i <= this.max; i++) {
            this.arr.push(i);
        }
    }
}

module.exports = GuessingGame;
