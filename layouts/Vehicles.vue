<template>
  <div :class=$style.mainPage>
    <MainHeader />
    <Nuxt v-if='getError === false'/>
    <LoadError v-else/>
  </div>
</template>

<script>
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
  },
  computed: {
    getError() {
      return this.$store.getters['vehicles/getLoadError']
    }
  }
}
</script>

<style lang='scss' module>
.mainPage {
  padding-bottom: 48px;
}
</style>
