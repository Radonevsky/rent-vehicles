<template>
  <div :class='$style.container'>
    <MainHeader />
    <Nuxt />
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader'
export default {
  name: 'VehiclesLayout',
  components: { MainHeader }
}
</script>

<style lang='scss' module>
  body {

  }
</style>
