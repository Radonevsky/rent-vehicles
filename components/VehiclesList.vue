<template>
  <div>
    <Loading v-if='isLoading'/>
    <ul v-if='loadDone' :class=$style.list>
      <li v-for='(item, idx) in filteredVehicleList' :key='idx'>
        <VehicleCard :vehicle='item' />
      </li>
    </ul>
  </div>
</template>

<script>
import VehicleCard from './VehicleCard'
import Loading from './Loading'

export default {
  name: 'VehiclesList',
  components: {
    VehicleCard,
    Loading
  },
  props: {
    filteredType: String,
    default: null
  },
  computed: {
    isLoading() {
      return this.$store.getters['vehicles/getIsLoading']
    },
    loadDone() {
      return this.$store.getters['vehicles/getIsDone']
    },
    vehiclesList() {
      return this.$store.getters['vehicles/getVehicles']
    },
    filteredVehicleList() {
      if (this.$props.filteredType !== 'whatever') {
        return this.vehiclesList.filter(item => item.type === this.$props.filteredType)
      }
      return this.vehiclesList
    }
  },
  methods: {
  }
}
</script>

<style lang='scss' module>
@import "assets/scss/vars";
  .list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
  }
</style>
