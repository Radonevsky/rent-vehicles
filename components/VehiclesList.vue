<template>
  <div>
    <ul :class=$style.list>
      <li v-for='(item, idx) in vehicles' :key='idx'>
        <VehicleCard :vehicle='item' />
      </li>
    </ul>
  </div>
</template>

<script>
import VehicleCard from './VehicleCard'

export default {
  name: 'VehiclesList',
  components: {
    VehicleCard
  },
  data () {
    return {
    }
  },
  computed: {
    vehicles() {
      return this.$store.getters['vehicles/getVehicles']
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
