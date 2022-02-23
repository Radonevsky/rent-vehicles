<template>
  <div :class=$style.mainPage>
    <MainHeader />
    <Nuxt v-if='getError === false'/>
    <LoadError v-else/>
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
  created() {
    this.$store.dispatch('vehicles/loadVehicles')
    if (localStorage.isDarkMode) {
      this.darkModeOn()
    }
  },
  computed: {
    getError() {
      return this.$store.getters['vehicles/getLoadError']
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
.mainPage {
  padding-bottom: 48px;
}
</style>
