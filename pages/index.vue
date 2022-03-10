<template>
  <div :class='[$style.wrapper, darkMode ? $style.dark : null]'>
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
    <Modal v-if='isModalShow === true' :darkMode='darkMode' @close='isModalShow = false'/>
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
    },
    darkMode() {
    return this.$store.getters['vehicles/getIsDarkMode']
    },
  }
}
</script>

<style lang='scss' module>
@import "assets/scss/vars";
@import "assets/scss/mixins";

.wrapper {
  background-color: $white;
}
.vehiclesPage {
  width: 100%;
  padding: 56px 28px;
  background-color: $light-gray;
  border-radius: 48px;
  @include for-phone-only {
    padding: 26px 16px;

    border-radius: 24px;
  }
  .vehiclesContainer {
    background-color: $light-gray;
  }
  .options {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 34px;
    font-family: mainBold, sans-serif;
    line-height: 3rem;
    @include for-phone-only {
      margin-bottom: 24px;
    }
    .title {
      display: inline;
      margin-right: 6px;
      font-size: 2.5rem;
      @include for-phone-only {
        font-size: 1.5rem;
      }
      color: $dark-blue;
    }
    .select {
      padding-right: 13px;
      font-size: 2.5rem;
      @include for-phone-only {
        font-size: 1.5rem;
        padding-right: 0;
      }
      color: $blue;
      font-family: mainBold, sans-serif;
      border: none;
      position: relative;
      background: none;
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
        border-right: $blue 2px solid;
        border-bottom: $blue 2px solid;
        transform: rotate(45deg);
        transition: transform .2s ease;
        @include for-phone-only {
          width: 3px;
          height: 3px;
          top: calc(50% - 6px);
        }
      }
    }
    .add {
      margin-top: 2px;
      padding-right: 68px;
      position: relative;

      cursor: pointer;
      font-size: 1.25rem;
      @include for-phone-only {
        font-size: 1rem;
        padding-right: 40px;
      }
      color: $blue;

      &:after {
        content: "";
        width: $button-size;
        height: $button-size;
        @include for-phone-only {
          width: $button-size-phone;
          height: $button-size-phone;
          border-radius: 8px;
          top: calc(50% - 18px);
        }
        position: absolute;
        right: 0;
        top: calc(50% - 28px);
        border-radius: 16px;

        background-color: $blue;
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
  background-color: $dark-blue;
  .vehiclesPage {
    background-color: $darkest-blue;
  }
  .vehiclesContainer {
    background-color: $darkest-blue;
  }
  .options {
    .title {
      color: $white;
    }
  }
}
</style>
