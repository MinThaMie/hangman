<template>
<div>
  <svg height="400" width="400" class="hangman" :class="{'dead': isDead}">
    <Rope />
    <Body />
    <Base />
  </svg>
  <div v-if="isDead">
    SAD you lost
  </div>
  <p v-else-if="isVictorious">Congratulations you have guessed the secret word!!</p>
  <div>
    <input v-model="guessInput" :disabled="hasEnded" type="text">
  </div>
  <p>{{ noWrongGuesses }}</p>
  <p>{{ correctString }}</p>
  <button @click="resetGame">Reset Game</button>
</div>
</template>

<script>
import Body from './body'
import Base from './base'
import Rope from './rope'
export default {
  name: 'HelloWorld',
  components: {
    Body, Base, Rope
  },
  computed: {
    guessInput: {
      set(input) {
        let addedChar = input.charAt(input.length - 1)
        this.$store.dispatch('guess', addedChar)
      },
      get(){
       return this.$store.getters.guessedInput
      }
    },
    correctString () {
      return this.$store.state.blankString
    },
    noWrongGuesses () {
      return this.$store.state.noWrongGuesses
    },
    isDead () {
      return this.$store.getters.isDead
    },
    isVictorious () {
      return this.$store.getters.isVictorious
    },
    hasEnded () {
      return this.isDead ||this.isVictorious
    }
  },
  methods: {
    resetGame () {
      this.$store.dispatch('resetGame')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
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
  }

  #door2 {
    transform-origin: 56% 78%;
    transition: transform 1s;
  
  }

  .hide {
    visibility: hidden;
  }

}
</style>
