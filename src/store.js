import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        guesses: [],
        noWrongGuesses: 0,
        word: "Staaaaateeee",
        blankString: ""
    },
    mutations: {
        addGuess (state, guess) {
            state.guesses.push(guess.toUpperCase())
        },
        incrementWrongGuesses (state) {
            state.noWrongGuesses++
        },
        updateBlankString (state) {
            let string = ""
            let arrWord = state.word.toUpperCase().split("")
            arrWord.forEach((letter) => {
              if (state.guesses.includes(letter)) {
                string += letter
              } else {
                string += "_"
              }
            })
            state.blankString = string
        },
        reset (state){
            state.guesses = []
            state.noWrongGuesses = 0
            state.blankString = ""
        }
    },
    actions: {
        guess ({commit, state}, letter) {
            commit('addGuess', letter)
            commit('updateBlankString')
            if (!(state.word.toUpperCase().includes(letter.toUpperCase()))){
                commit('incrementWrongGuesses')
            }
        },
        resetGame({commit}) {
            commit('reset')
        }
    },
    getters: {
        guessedInput (state) {
            return state.guesses.join('')
        },
        isDead (state) {
            return state.noWrongGuesses >= 7
        },
        isVictorious (state) {
            return state.blankString.toUpperCase() == state.word.toUpperCase()
        }
    },
})