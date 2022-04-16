<template>
  <v-container fluid id="jams">
    <v-row class="mb-3">
      <v-col cols="5">
        <v-select
          v-model="line"
          :items="lines"
          item-text="id"
          item-value="id"
          label="Line"
          outlined
        />
      </v-col>
      <v-col cols="5">
        <v-select
          v-model="jammer"
          :items="jammers"
          item-text="derbyname"
          item-value="id"
          label="Jammer"
          outlined
        />
      </v-col>
      <v-btn
        class="mt-3 ml-3"
        color="primary"
        elevation="9"
        x-large
        fab
        @click.stop="addJam"
      >
        +
      </v-btn>
    </v-row>
    <v-row>
      <v-col class="bold" cols="1"> Jam</v-col>
      <v-col class="bold" cols="2"> Line</v-col>
      <v-col class="bold" cols="2"> Jammer</v-col>
      <v-col class="bold" cols="3"> Players</v-col>
      <v-col class="bold" cols="3"> Lead</v-col>
    </v-row>
    <div class=" d-flex flex-column-reverse">
      <v-row align="center" v-for="(jam, index) in jams" :key="jam">
        <v-col cols="1"> {{ index }}</v-col>
        <v-col cols="2"> {{ jam.line }}</v-col>
        <v-col cols="2"> {{ jam.jammer }}</v-col>
        <v-col cols="3">
          <div class="dot" @click="setPlayers(index)">
            {{ jam.starting_players }}
          </div>
        </v-col>
        <v-col cols="3" @click="setLead(index)">
          <v-icon v-if="!jam.lead" large>mdi-star-settings-outline</v-icon>
          <v-icon v-else large color="secondary">mdi-star-settings</v-icon>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Vue from 'vue'
import { mapMutations } from 'vuex'

export default {
  props: {
    lines: {
      type: Array,
      required: true
    },
    jammers: {
      type: Array,
      required: true
    },
    jams: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      line: null,
      jammer: null
    }
  },
  computed: {
    copyJams () {
      return JSON.parse(JSON.stringify(this.jams))
    }
  },
  methods: {
    ...mapMutations(['SET']),
    addJam () {
      this.copyJams.push({ line: this.line, jammer: this.jammer, starting_players: 5, lead: false })
      this.SET({ key: 'game.jams', value: JSON.parse(JSON.stringify(this.copyJams)) })
      this.line = null
      this.jammer = null
    },
    setLead (index) {
      const value = !this.copyJams[index].lead
      Vue.set(this.copyJams[index], 'lead', value)
      this.SET({ key: 'game.jams', value: JSON.parse(JSON.stringify(this.copyJams)) })
    },
    setPlayers (index) {
      const value = this.copyJams[index].starting_players - 1
      Vue.set(this.copyJams[index], 'starting_players', value > 0 ? value : 5)
      this.SET({ key: 'game.jams', value: JSON.parse(JSON.stringify(this.copyJams)) })
    }
  }
}
</script>

<style lang="scss" scoped>
#jams {
  height: 80vh;
  overflow-y: scroll;
  border-left: 1px solid #ff6386;
  padding-left: 10px;
  .bold {
    font-weight: 600;;
  }
  .dot {
    height: 35px;
    width: 35px;
    background-color: #001867;
    color: white;
    text-align: center;
    padding-top: 5px;
    border-radius: 50%;
    display: inline-block;
}
}
</style>
