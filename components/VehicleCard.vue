<template>
  <div class='vehicleCard'>
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'VehicleCard',
  props: {
    title: {
      type: String,
      default: "no title"
    }
  }
}
</script>

<style lang='scss' scoped>
@import "assets/scss/vars";

.vehicleCard {
  width: 373.33px;
  height: 164px;
  border-radius: 32px;

  background-color: $background-white;
}
</style>
