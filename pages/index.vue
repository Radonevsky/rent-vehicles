<template>
  <div class='container'>
    <div :class=$style.vehiclesPage>
      <div :class=$style.options>
        <div :class=$style.filter>Rent whatever</div>
        <div :class=$style.add>Add new</div>
      </div>
      <div :class=$style.vehiclesContainer>
        <VehiclesList />
      </div>
    </div>
  </div>
</template>
<script>

import VehiclesList from '../components/VehiclesList'

export default {
  name: 'MainLayout',
  components: {
    VehiclesList
  },
  layout: 'Vehicles'
}
</script>

<style lang='scss' module>
@import "assets/scss/vars";

.vehiclesPage {
  width: 100%;
  background-color: $background-gray;
  border-radius: 48px;
  .vehiclesContainer {
    max-width: 1184px;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
