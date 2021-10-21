function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + 5;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: 0,
            battleLog: []
        };
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return {width: '0%'};
            }
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return {width: '0%'};
            }
            return {width: this.playerHealth + '%'};
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'player';
            }
        },
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth = this.monsterHealth - attackValue;
            this.addLogMessage('You', 'attack', attackValue);
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth = this.playerHealth - attackValue;
            this.addLogMessage('Monster', 'attack', attackValue);
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.addLogMessage('You', 'make SPECIAL attack', attackValue);
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
                this.addLogMessage('You', 'heal', healValue);
            } else {
                this.playerHealth = this.playerHealth + healValue;
                this.addLogMessage('You', 'heal', healValue);
            }
            this.attackPlayer();
        }, 
        startNewGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.battleLog = [];
        }, 
        surrender() {
            this.winner = 'monster';
        },
        addLogMessage(user, action, value) {
            this.battleLog.unshift(`Round-${this.currentRound} ${user} - ${action}: ${value}`);
        }
    }
});

app.mount('#game');
