<template>
  <div :class='[$style.mainPage, darkMode ? $style.dark : null]'>
    <MainHeader />
    <Nuxt v-if='getError === false'/>
    <LoadError v-else :darkMode='darkMode'/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import MainHeader from '../components/MainHeader'
import loadError from '../components/loadError'

export default {
  name: 'VehiclesLayout',
  components: {
    MainHeader,
    loadError
  },
  computed: {
    getError() {
      return this.$store.getters['vehicles/getLoadError']
    },
    darkMode() {
      return this.$store.getters['vehicles/getIsDarkMode']
    }
  },
  created() {
    this.$store.dispatch('vehicles/loadVehicles')
    if (localStorage.isDarkMode === 'true') {
      this.darkModeOn()
    }
  },
  methods: {
    ...mapMutations({
      darkModeOn: 'vehicles/SET_DARK_MODE_ON'
    })
  }
}
</script>

<style lang='scss' module>
@import "assets/scss/vars";
.mainPage {
  padding-bottom: 48px;
  min-height: 100vh;
}
.dark {
  background-color: $dark-blue;
}
</style>
