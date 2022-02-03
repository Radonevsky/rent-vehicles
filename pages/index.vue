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
      position: relative;
      font-size: 2.5rem;
      color: $text-dark;
      padding-right: 30px;
      span {
        color: $text-blue;
      }
      &:after {
        content: "";
        width: 6px;
        height: 6px;
        position: absolute;
        right: 0;
        top: calc(50% - 6px);

        border-right: $text-blue 3px solid;
        border-bottom: $text-blue 3px solid;
        transform: rotate(45deg);
        transition: transform .2s ease;
      }
/*      &:hover:after {
          transform: rotate(0deg);
      }*/
    }
    .add {
      padding-right: 68px;
      position: relative;

      font-size: 1.25rem;
      color: $text-blue;

      &:after {
        content: "";
        width: 48px;
        height: 48px;
        position: absolute;
        right: 0;
        top: calc(50% - 24px);
        border-radius: 16px;

        background-color: $text-blue;
        background-image: url("../static/images/svg/Plus.svg");
        background-repeat: no-repeat;
        background-position: 50% 50%;
      }
    }
  }
  .vehiclesContainer {
    max-width: 1184px;
    width: 100%;
    margin: 0 auto;
  }
}
</style>
