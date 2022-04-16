<template lang="pug">
  v-container(fluid)
    v-switch(
      class="custom-switch"
      v-model="bringCorrection"
      :label="`Corrections`")
    v-row(align="center" justify="center")
      v-col(cols="12").text-center
        h1 Players management
    v-row(justify="center")
      v-col(cols="12")
        h3 Jammers
      v-col(cols="3" v-for="jammer in jammers")
        card(:player='jammer' @setPenalty="setPenalty" @correctPenalties="correctPenalties" :correction="bringCorrection")
    v-row
      v-col(cols="12")
        h3 Pivots
      v-col(cols="3" v-for="pivot in pivots")
        card(:player='pivot' @setPenalty="setPenalty" @correctPenalties="correctPenalties" :correction="bringCorrection")
    v-row
      v-col(cols="12")
        h3 Blockers
      v-col(cols="3" v-for="blocker in blockers")
        card(:player="blocker" @setPenalty="setPenalty" @correctPenalties="correctPenalties" :correction="bringCorrection")
</template>

<script>
// import Vue from 'vue'
const { players } = require('../../lib/data.js')
export default {
  components: {
    card: () => import('~/components/card-player.vue')
  },
  data () {
    return {
      players,
      bringCorrection: false
    }
  },
  computed: {
    jammers () {
      return this.players && this.players.filter(player => player.jammer)
    },
    pivots () {
      return this.players && this.players.filter(blocker => blocker.pivot)
    },
    blockers () {
      return this.players && this.players.filter(blocker => !blocker.pivot && !blocker.jammer)
    }
  },
  methods: {
    setPenalty (playerId) {
      const index = this.players.findIndex(player => player.id === playerId)
      this.players[index].penalties += 1
    },
    correctPenalties (playerId) {
      const index = this.players.findIndex(player => player.id === playerId)
      if (this.players[index].penalties > 0) {
        this.players[index].penalties -= 1
      }
    }
  }
}
</script>

<style lang="scss">
.custom-switch {
  position: absolute;
  left: -20px;
  top: 20px;
  margin: 0;
  padding-left: 40px !important;
  transform: skew(-20deg);
  text-transform: uppercase;
  font-style: oblique 40deg;
  background-color: #ff6386;
  width: 220px;
  padding: 20px 0 0 20px;
  label {
      color: white !important;
      font-size: 1em !important;
  }
}
</style>
