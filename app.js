new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: [],
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },

    attack: function () {
      var damage = this.calcDamage(7, 10);
      this.monsterHealth -= damage;

      this.turns.unshift({
        isPlayer: true,
        text: "Charizard used Ember! " + damage + " damage!",
      });

      if (this.checkWin()) {
        return;
      }

      this.monsterAttacks();
    },

    attack1: function () {
      var damage = this.calcDamage(10, 20);
      this.monsterHealth -= damage;

      this.turns.unshift({
        isPlayer: true,
        text: "Charizard used Flamethrower! " + damage + " damage!",
      });

      if (this.checkWin()) {
        return;
      }

      this.monsterAttacks();
    },

    attack2: function () {
      var damage = this.calcDamage(5, 10);
      this.monsterHealth -= damage;

      this.turns.unshift({
        isPlayer: true,
        text: "Charizard used Burning Tail! " + damage + " damage!",
      });

      if (this.checkWin()) {
        return;
      }

      this.monsterAttacks();
    },

    attack3: function () {
      var damage = this.calcDamage(1, 5);
      this.monsterHealth -= damage;

      this.turns.unshift({
        isPlayer: true,
        text: "Charizard used Fire Spin! " + damage + " damage!",
      });

      if (this.checkWin()) {
        return;
      }

      this.monsterAttacks();
    },

    monsterAttacks: function () {
      var damage = this.calcDamage(5, 12);
      this.playerHealth -= damage;

      this.checkWin();
      this.turns.unshift({
        isPlayer: false,
        text: "Pikachu hits Charizard for " + damage + " damage!",
      });
    },

    calcDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },

    checkWin: function () {
      if (this.monsterHealth <= 0) {
        if (confirm("Charizard won!")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm("You lost. Pikachu won!")) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    },
  },
});
