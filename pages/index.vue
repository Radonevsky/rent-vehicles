<template>
  <div>
    <VehiclesList />
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
