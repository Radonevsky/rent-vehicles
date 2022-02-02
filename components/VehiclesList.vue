<template>
  <div>
    <ul :class=$style.list>
      <li v-for='(item, idx) in vehicles' :key='idx'>
        <VehicleCard :title='item.name' />
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
      vehicles: [
        { name: 'HelloWorld1' },
        { name: 'HelloWorld2' },
        { name: 'HelloWorld3' },
        { name: 'HelloWorld4' },
        { name: 'HelloWorld5' },
        { name: 'HelloWorld6' },
        { name: 'HelloWorld7' },
        { name: 'HelloWorld8' },
        { name: 'HelloWorld9' },
      ]
    }
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
