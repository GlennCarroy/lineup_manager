<template lang="pug">
  v-container(fluid)
      v-row(align="center" justify="center")
          v-col(cols="3" v-for="jammer in dataJammers")
            v-card(elevation="24")
              v-card-text.d-flex.flex-row.justify-space-between
                div
                  p.display-1(style="color:#0089ef;") {{ jammer.derbyname }}
                  p Leads: {{ jammer.leads }} %
                  p Penalties: {{ jammer.penalties }}
                div.text-center
                  v-progress-circular(
                    :rotate="360"
                    :size="100"
                    :width="15"
                    :value="jammer.leads"
                    color="secondary") {{ !isNaN(jammer.leads) ? jammer.leads : 0  }} %
      v-row(align="center" justify="center").lignes
          v-col(cols="3" v-for="line in dataLines")
            v-card(elevation="24")
              v-card-text
                p.display-1.text--primary {{ line.id }}
                div.d-flex.flex-row.justify-space-between
                  p Leads: {{ !isNaN(line.leads) ? line.leads : 0 }} %
                  p Départ à 5: {{ !isNaN(line.beingFive) ? line.beingFive : 0 }} %
                v-progress-linear(
                  :value="line.leads"
                  background-color="grey lighten-2"
                  color="secondary"
                  height="15")
                v-progress-linear(
                  class="mt-3"
                  :value="line.beingFive"
                  background-color="grey lighten-2"
                  color="primary"
                  height="15")
          v-col(cols="3" align-self="stretch")
            v-card(elevation="24").custom-lead
              v-card-text
                p {{ !isNaN(pourcentLeads) ? pourcentLeads : 0 }} % lead
                p {{ !isNaN(pourcentFiveStart) ? pourcentFiveStart : 0 }} % five start

</template>

<script>
import { mapState } from 'vuex'
const { players, lines } = require('../lib/data.js')

export default {
  data () {
    return {
      players
    }
  },
  computed: {
    ...mapState(['game']),
    jammers () {
      return this.players && this.players.filter(player => player.jammer)
    },
    lines () {
      return lines
    },
    pourcentLeads () {
      const total = this.game && this.game.jams.length
      const leads = this.game && this.game.jams.filter(jam => jam.lead).length
      return ((leads / total) * 100).toFixed(0) || 0
    },
    pourcentFiveStart () {
      const total = this.game && this.game.jams.length
      const beingFive = this.game && this.game.jams.filter(jam => jam.starting_players === 5).length
      return ((beingFive / total) * 100).toFixed(0) || 0
    },
    totalLeads () {
      return this.game && this.game.jams.filter(jam => jam.lead).length
    },
    dataJammers () {
      const data = this.jammers.map((j) => {
        const jams = this.game && this.game.jams.filter(jam => jam.jammer === j.id)
        const leads = jams.filter(jam => jam.lead)
        console.log(leads, this.totalLeads, leads.length / this.totalLeads)
        j.leads = ((leads.length / this.totalLeads) * 100).toFixed(0) || 0
        return j
      })
      return data
    },
    dataLines () {
      const data = this.lines.map((l) => {
        const jams = this.game && this.game.jams.filter(jam => jam.line === l.id)
        const leads = jams.filter(jam => jam.lead)
        const fives = jams.filter(jam => jam.starting_players === 5).length
        l.leads = ((leads.length / this.totalLeads) * 100).toFixed(0) || 0
        l.beingFive = ((fives / jams.length) * 100).toFixed(0) || 0
        return l
      })
      return data
    }
  }
}
</script>

<style lang="scss" scoped>
.lignes {
  margin-top: 50px;
  .v-card {
    height: 100%;
  }
  .custom-lead {
    background-color: #ff6386;
    p {
      color: white;
      font-size: 40px;
      margin-top: 40px;
    }
  }
}
</style>
