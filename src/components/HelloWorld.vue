<template>
<div>
  <svg height="250" width="400" class="hangman" :class="{ dead: isDead}">
    <line v-if="noWrongGuesses >= 1" id="rope" x1="200" y1="20" x2="200" y2="60" />
    <g id="body">
      <g v-if="noWrongGuesses >= 2" id="head">
      <circle cx="200" cy="80" r="20" stroke="black" stroke-width="4" fill="white"/>
        <g id="rEyes" :class="{'hide' : isDead == true}">
          <circle cx="193" cy="80" r="4"/>
          <circle cx="207" cy="80" r="4"/>
        </g>
        <g id="xEyes" :class="{'hide' : isDead == false}">
          <line x1="190" y1="78" x2="196" y2="84"/>
          <line x1="204" y1="78" x2="210" y2="84"/>
          <line x1="190" y1="84" x2="196" y2="78"/>
          <line x1="204" y1="84" x2="210" y2="78"/>
        </g>
      </g>
      <line v-if="noWrongGuesses >= 3" id="back" x1="200" y1="100" x2="200" y2="150" />
      <line v-if="noWrongGuesses >= 4" id="armL" x1="200" y1="120" x2="170" y2="140" />
      <line v-if="noWrongGuesses >= 5" id="armR" x1="200" y1="120" x2="230" y2="140" />
      <line v-if="noWrongGuesses >= 6" id="legL" x1="200" y1="150" x2="180" y2="190" />
      <line v-if="noWrongGuesses >= 7" id="legR" x1="200" y1="150" x2="220" y2="190" />
    </g>
    <line x1="10" y1="250" x2="150" y2="250" />
    <line class="door" id="door1" x1="150" y1="250" x2="200" y2="250" />
    <line  class="door" id="door2" x1="200" y1="250" x2="250" y2="250" />
    <line x1="250" y1="250" x2="390" y2="250" />
    <line x1="100" y1="250" x2="100" y2="20" />
    <line x1="100" y1="20" x2="200" y2="20" />
  </svg>
  <div v-show="isDead">
    SAD you lost
  </div>
  <div>
    <input v-model="guessInput" :disabled="hasEnded" type="text">
  </div>
  <p>{{ noWrongGuesses }}</p>
  <p>{{ correctString }}</p>
  <p>{{ isVictorious }}</p>
  <button @click="resetGame">Reset Game</button>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => {
    return {
      guessInput: "",
      secretWord: "Nick"
    }
  },
  computed: {
    capitalizedWord: function () {
      return this.secretWord.toUpperCase()
    },
    guesses: function () {
      return this.guessInput.toUpperCase().split("")
    },
    correctString: function () {
      let string = ""
      let arrWord = this.capitalizedWord.split("")
      arrWord.forEach((letter) => {
        if (this.guesses.includes(letter)) {
          string += letter
        } else {
          string += "_"
        }
      })
      return string 
    },
    noWrongGuesses: function (){
      let wrong = 0
      this.guesses.forEach((guess) => {
        if (!(this.capitalizedWord.includes(guess))) {
          wrong++
        }
      })
      return wrong 
    },
    isDead: function () {
      return this.noWrongGuesses >= 7
    },
    isVictorious: function () {
      return this.correctString == this.capitalizedWord
    },
    hasEnded: function () {
      return this.isDead ||this.isVictorious
    }
  },
  methods: {
    resetGame: function () {
      this.guessInput = ""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hangman {
  margin: 0 auto;

  line {
    stroke: black;
    stroke-width: 4;
    
  }
  &.dead {
    line, circle {
       stroke: red;
    }
  }
  #door1 {
    transform-origin: 0% 100%;
    transition: transform 1s;
    &.open {
      transform: rotateZ(-45deg);
    }
  }

  #door2 {
    transform-origin: 56% 78%;
    transition: transform 1s;
    &.open {
      transform: rotateZ(45deg);
    }
  }

  .hide {
    visibility: hidden;
  }

}
</style>
