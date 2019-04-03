<template>
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
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Body',
  computed: {
    ...mapState(['noWrongGuesses']),
    ...mapGetters(['isDead'])
  }
}
</script>
