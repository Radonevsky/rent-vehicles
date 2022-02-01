<template>
  <div class='container'>
    <div :class=$style.vehiclesPage>
      <div :class=$style.vehiclesContainer>
        <div :class=$style.options>
          <h1 :class=$style.filter>Rent <span>whatever</span></h1>
          <div :class=$style.add>Add new</div>
        </div>
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
  padding: 56px 28px;
  background-color: $background-gray;
  border-radius: 48px;

  .options {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    font-family: mainBold, sans-serif;
    line-height: 3rem;
    .filter {
      font-size: 2.5rem;
      color: $text-dark;
      span {
        color: $text-blue;
      }
    }
    .add {
      color: $text-blue;
    }
  }
  .vehiclesContainer {
    max-width: 1184px;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
