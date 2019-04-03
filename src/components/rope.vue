<template>
  <line v-if="noWrongGuesses >= 1" id="rope" x1="200" y1="20" x2="200" y2="60" />
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Rope',
  computed: mapState(['noWrongGuesses']),
}
</script>
