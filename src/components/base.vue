<template>
  <g>
  <line x1="10" y1="250" x2="150" y2="250" />
  <line class="door" :class="{'open' : isDead}" id="door1" x1="150" y1="250" x2="200" y2="250" />
  <line  class="door" :class="{'open' : isDead}" id="door2" x1="200" y1="250" x2="250" y2="250" />
  <line x1="250" y1="250" x2="390" y2="250" />
  <line x1="100" y1="250" x2="100" y2="20" />
  <line x1="100" y1="20" x2="200" y2="20" />
  </g>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Base',
  computed: mapGetters(['isDead'])
}
</script>
