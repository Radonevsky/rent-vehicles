<template>
  <div>
    <div class='container'>
      <h2>VehicleINDEX {{ id }}</h2>
      <div>
        <nuxt-link :to='{ path: `/specification` }'>Link to Specifications</nuxt-link>
      </div>
      <div>
        <nuxt-link :to='{ path: `/team` }'>Link to Team</nuxt-link>
      </div>
      <div>
        <nuxt-link :to='{ path: `/terms` }'>Link to Rent Terms</nuxt-link>
      </div>
      <nuxt-child />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VehiclePage',
  data() {
    return {

    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    /*  methods: {
        goToSeventh() {
          console.log(this.router)
          this.router.push({ path: '7' })
        }
      }, */

  }
}
</script>

<style scoped>

</style>
