<template>
  <div :class=$style.mainPage>
    <MainHeader />
    <Nuxt />
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader'
export default {
  name: 'VehiclesLayout',
  components: { MainHeader },
  created() {
    this.$store.dispatch('vehicles/loadVehicles')
  }
}
</script>

<style lang='scss' module>
.mainPage {
  padding-bottom: 48px;
}
</style>
