<template lang="pug">
  div.tripod
    h4 {{ line.id }}
    ul.tete
      li(v-for="(p,i) in tete" :key="p" :class="{'bold': (i===0)}") {{ p }}
    ul.exte
      li(v-for="(p,i) in exte" :key="p" :class="{'bold': (i===0)}") {{ p }}
    ul.inte
      li(v-for="(p,i) in inte" :key="p" :class="{'bold': (i===0)}") {{ p }}
    span.offense.bold {{ offense[0] }}
</template>

<script>
export default {
  props: {
    line: {
      type: Object,
      required: true
    },
    players: {
      type: Array,
      required: true
    }
  },
  computed: {
    tete () {
      const raw = this.line.tripod.tete
      return raw.map(r => {
        const player = this.players.find(player => player.id === r)
        return player && player.derbyname
      })
    },
    exte () {
      const raw = this.line.tripod.exte
      return raw.map(r => {
        const player = this.players.find(player => {
          return player.id === r
        })
        return player && player.derbyname
      })
    },
    inte () {
      const raw = this.line.tripod.inte
      return raw.map(r => {
        const player = this.players.find(player => player.id === r)
        return player && player.derbyname
      })
    },
    offense () {
      const raw = this.line.offense
      return raw.map(r => {
        const player = this.players.find(player => player.id === r)
        return player && player.derbyname
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.tripod {
  position: relative;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 100px 150px 100px;
  box-shadow: 0 16px 10px -17px rgba(0, 0, 0, 0.9);
  border-color: transparent transparent #0089ef transparent;
  margin-left: 60px;
  margin-top: 80px;
  .bold {
    color: #0089ef;
    font-weight: 600;
  }
  .tete,
  .inte,
  .exte,
  .offense, h4 {
    position: absolute;
  }
  h4 {
    font-size: 2rem;
    color: white;
    font-style: oblique 40deg;
    z-index: 2;
    display: block;
    width: 200px;
    text-align: center;
    text-transform: uppercase;
    top: 115px;
    left: -100px;
  }
  .tete {
    bottom: 0px;
    left: -20px;
  }
  .inte {
    top: 100px;
    right: 100px;
  }
  .exte {
    top: 100px;
    left: 100px;
  }
  .offense {
    top: 0px;
    left: 100px;
  }
  .offense::before {
      content:"";
      height: 25px;
      width: 25px;
      background-color: #ff6386;
      border-radius: 50%;
      display: inline-block;
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column-reverse;
  }
  ul li, .offense{
    font-size: 1em;
    text-transform: uppercase;
    font-weight: 600;
    font-style: oblique 40deg;
  }
}
</style>
