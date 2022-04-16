<template lang="pug">
  v-container(fluid)
      div.custom-rotation.d-flex.flex-column
        span Rotation
        span Inte {{ backups.inte }}
        span Exte {{ backups.exte }}
      v-row(justify="center")
        v-col(cols="12").text-center
        h1 The game
      v-row(justify="center")
        v-col(cols="5" elevation="12")
          h3 Formations
          tripod(v-for="line in lines" :line="line" :players="players")
        v-col(cols="7" elevation="12")
          h3 Jams
          jams(:lines="lines" :jammers="jammers" :jams="game.jams")
</template>

<script>
import { mapState } from 'vuex'
const { players, lines, backups } = require('../lib/data.js')

export default {
  components: {
    tripod: () => import('~/components/tripod.vue'),
    jams: () => import('~/components/jams.vue')
  },

  data () {
    return {
      players,
      lines,
      backups
    }
  },
  computed: {
    ...mapState(['game']),
    jammers () {
      return this.players && this.players.filter(player => player.jammer)
    },
    pivots () {
      return this.players && this.players.filter(blocker => blocker.pivot)
    },
    blockers () {
      return this.players && this.players.filter(blocker => !blocker.pivot && !blocker.jammer)
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-rotation {
  position: absolute;
  top: -10px;
  left: -20px;
  margin: 0;
  padding-left: 40px !important;
  transform: skew(-20deg);
  text-transform: uppercase;
  font-style: oblique 40deg;
  background-color: #ff6386;
  width: 220px;
  padding: 20px 0 0 20px;
  span {
      color: white !important;
      font-size: 1em !important;
  }
}
</style>
