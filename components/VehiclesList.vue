<template>
  <div class='vehicles'>
    <h2>Vehicles list</h2>
    <div class='vehicle'>I <span>am</span> vehicle</div>
    <span :class="$style.test">vehiclesLIST TEST SPAN</span>
  </div>
</template>

<script>
export default {
  name: 'VehiclesList'
}
</script>

<style lang='scss' module>
  .test {
    color: green;
  }
</style>
