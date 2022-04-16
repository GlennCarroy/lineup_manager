<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-btn v-for="(item, i) in items" :key="i" @click.stop="goTo(item.to)">
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" class="ml-4" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Stats',
          to: '/'
        },
        {
          icon: 'mdi-account-group',
          title: 'Players',
          to: '/players'
        },
        {
          icon: 'mdi-roller-skate',
          title: 'Game',
          to: '/gameday'
        }
      ],
      miniVariant: false,
      title: 'Line-up Manager'
    }
  },
  methods: {
    goTo (to) {
      return this.$router.push(to)
    }
  }
}
</script>
