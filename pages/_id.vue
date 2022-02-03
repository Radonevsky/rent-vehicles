<template>
  <div :class=$style.vehiclePage>
    <div class='container'>
      <div :class=$style.inner>
        <img :class=$style.img src='https://loremflickr.com/900/900/airship' alt='Vehicle image'>
        <div :class=$style.info>
          <h2 :class=$style.title>XR-74 «Cooper»</h2>
          <ul :class=$style.links>
            <li :class=$style.linksItem>
              <nuxt-link :to='{ path: `specification` }'>
                <p>Specifications</p>
              </nuxt-link>
            </li>
            <li :class=$style.linksItem>
              <nuxt-link :to='{ path: `team` }'>
                <p>Team</p>
              </nuxt-link>
            </li>
            <li :class=$style.linksItem>
              <nuxt-link :to='{ path: `terms` }'>
                <p>Rent terms</p>
              </nuxt-link>
            </li>
          </ul>
          <nuxt-child />
          <div :class=$style.rent>
            <p>Rent for <span>164 $/h</span></p>
            <button>Rent now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VehiclePage',
  layout: 'Vehicles',
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

<style lang='scss' module>
@import "assets/scss/vars";

.inner {
  display: flex;
  gap: 64px;
  .img {
    display: inline-block;
    max-width: 712px;
    width: 100%;
    max-height: 700px;
    overflow: hidden;
    border-radius: 24px;
  }
  .info {
    display: flex;
    flex-direction: column;
    padding-top: 56px;
    .title {
      font-family: mainBold, sans-serif;
      font-size: 2.5rem;
      line-height: 120%;
      color: $text-dark;
    }
    .links {
      display: flex;
      gap: 32px;
      justify-content: space-between;
      margin-top: 32px;
      max-width: 300px;
    }
  }
}
</style>
