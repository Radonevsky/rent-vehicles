<template>
  <div>
    <div class='container'>
      <div :class=$style.vehiclesPage>
        <div :class=$style.vehiclesContainer>
          <div :class=$style.options>
            <div>
              <h1 :class=$style.title>Rent</h1>
              <div :class=$style.forArrow>
                <select
                  v-model='filteredType'
                  :class=$style.select
                >
                  <option>whatever</option>
                  <option v-for='item in vehiclesTypes' :key='item'>{{ item }}</option>
                </select>
              </div>
            </div>
            <div :class=$style.add @click='isModalShow = true'>Add new</div>
          </div>
          <VehiclesList :filteredType='filteredType'/>
        </div>
      </div>
    </div>
    <Modal v-if='isModalShow === true' @close='isModalShow = false'/>
  </div>
</template>
<script>

import VehiclesList from '../components/VehiclesList'
import Modal from '../components/Modal'

export default {
  name: 'MainLayout',
  components: {
    VehiclesList,
    Modal
  },
  layout: 'Vehicles',
  data() {
    return {
      filteredType: 'whatever',
      isModalShow: false
    }
  },
  computed: {
    loadDone() {
      return this.$store.getters['vehicles/getIsDone']
    },
    vehiclesTypes() {
      if (this.loadDone) {
        return this.$store.getters['vehicles/getTypes']
      }
      return null
    }
  }
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
    margin-bottom: 34px;
    font-family: mainBold, sans-serif;
    line-height: 3rem;
    .title {
      display: inline;
      margin-right: 6px;
      font-size: 2.5rem;
      color: $text-dark;
    }
    .select {
      font-size: 2.5rem;
      color: $text-blue;
      font-family: mainBold, sans-serif;
      border: none;
      position: relative;
      background: none;
      padding-right: 13px;
      appearance: none;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
    .forArrow {
      display: inline;
      position: relative;
      cursor: pointer;
      &:after {
        content: "";
        width: 6px;
        height: 6px;
        position: absolute;
        right: 0;
        top: calc(50% - 12px);
        border-right: $text-blue 3px solid;
        border-bottom: $text-blue 3px solid;
        transform: rotate(45deg);
        transition: transform .2s ease;
      }
    }
    .add {
      margin-top: 2px;
      padding-right: 68px;
      position: relative;

      cursor: pointer;
      font-size: 1.25rem;
      color: $text-blue;

      &:after {
        content: "";
        width: $button-size;
        height: $button-size;
        position: absolute;
        right: 0;
        top: calc(50% - 28px);
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
.dark {
  background-color: $text-dark;
}
</style>
