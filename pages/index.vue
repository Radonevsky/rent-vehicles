<template>
  <div>
    <div class='container'>
      <VehiclesList />
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
  layout: 'Vehicles',
}
</script>

<style>
  .container {}
</style>
