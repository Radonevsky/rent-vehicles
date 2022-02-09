<template>
  <div :class=$style.vehiclePage>
    <div class='container'>
      <div :class=$style.inner>
        <img :class=$style.img src='https://loremflickr.com/900/900/airship' alt='Vehicle image'>
        <div :class=$style.info>
          <h2 :class=$style.title>XR-74 «Cooper»</h2>
          <ul :class=$style.links>
            <li :class=$style.linksItem>
              <nuxt-link :to='{ path: `specification` }' :class=$style.link :active-class=$style.activeLink>
                Specifications
              </nuxt-link>
            </li>
            <li :class=$style.linksItem>
              <nuxt-link :to='{ path: `team` }' :class=$style.link :active-class=$style.activeLink>
                Team
              </nuxt-link>
            </li>
            <li :class=$style.linksItem>
              <nuxt-link :to='{ path: `terms` }' :class=$style.link :active-class=$style.activeLink>
               Rent terms
              </nuxt-link>
            </li>
          </ul>
          <div :class=$style.linksContent>
            <nuxt-child />
          </div>
          <div :class=$style.rent>
            <p :class=$style.rentText>Rent for <span>164 $/h</span></p>
            <button :class=$style.rentButton>Rent now</button>
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
  margin-bottom: 56px;
  .img {
    display: inline-block;
    min-width: 712px;
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
      margin: 29px 0 31px;
      max-width: 300px;
    }
    .link {
      font-size: 1rem;
      line-height: 14px;
      font-family: mainBold, sans-serif;
      text-decoration: none;
      color: $text-gray;
    }
    .activeLink {
      color: $text-blue;
    }

  }

  .linksContent {
    min-height: 398px;
  }

  .rent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 536px;
    min-height: 80px;
    padding: 0 32px;
    background-color: $background-gray;
    border-radius: 16px;
    .rentText {
      font-family: mainBold, sans-serif;
      font-size: 1.25rem;
      line-height: 140%;
      color: $text-dark;
      span {
        color: $text-pink;
      }
    }
    .rentButton {
      width: 136px;
      height: 48px;
      font-family: mainBold, sans-serif;
      font-size: 1rem;
      line-height: 0.875rem;
      color: $background-white;
      background-color: $text-blue;
      border-radius: 12px;
      border: none;
    }
  }
}
</style>
