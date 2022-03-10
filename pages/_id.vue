<template>
  <div :class='[$style.vehiclePage, darkMode ? $style.dark : null]'>
    <div class='container'>
      <Loading v-if='isLoading' :class=$style.loading />
      <div v-if='loadDone' :class=$style.inner >
        <div :class=$style.imgInner><img :class=$style.img :src=currentVehicle.image alt='Vehicle image'></div>
        <div :class=$style.info>
          <h2 :class=$style.title>{{ currentVehicle.name }}</h2>
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
          <div :class=$style.rentInner>
            <div :class=$style.rent>
              <p :class=$style.rentText>Rent for <span>{{ currentVehicle.rent }} $/h</span></p>
              <button :class=$style.rentButton>Rent now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '../components/Loading'

export default {
  name: 'VehiclePage',
  components: {
    Loading
  },
  layout: 'Vehicles',
  validate({ params }) {
    if (params.id.length === 24) {
      return true
    } else {
      return false
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    isLoading() {
      return this.$store.getters['vehicles/getIsLoading']
    },
    loadDone() {
      return this.$store.getters['vehicles/getIsDone']
    },
    currentVehicle() {
      return this.$store.getters['vehicles/getCurrentVehicle'](this.id)
    },
    darkMode() {
      return this.$store.getters['vehicles/getIsDarkMode']
    },
  },
}
</script>

<style lang='scss' module>
@import "assets/scss/vars";
@import "assets/scss/mixins";

.vehiclePage {
  padding: 0 28px;
  @include for-phone-only {
    padding: 0 16px;
  }
}

.inner {
  display: flex;
  gap: 64px;
  margin-bottom: 56px;
  @include for-tablet-landscape {
    flex-wrap: wrap;
    justify-content: center;
    gap: 22px;
  }
  .imgInner{
    flex: 2 1 712px;
    @include for-tablet-landscape {
      flex-grow: 0;
    }
  }
  .img {
    max-width: 712px;
    width: 100%;
    height: auto;
    max-height: 700px;
    overflow: hidden;
    border-radius: 24px;
  }

  .info {
    display: flex;
    flex: 1 1 536px;
    flex-direction: column;
    padding-top: 56px;
    position: relative;
    @include for-tablet-landscape {
      flex-grow: 0;
      padding-top: 0;
      padding-bottom: 60px;
    }
    .title {
      font-family: mainBold, sans-serif;
      font-size: 2.5rem;
      line-height: 120%;
      color: $dark-blue;
      @include for-phone-only {
        font-size: 1.5rem;
      }
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
      color: $dark-gray;
    }
    .activeLink {
      color: $blue;
    }

  }

  .linksContent {
    min-height: 398px;
  }

  .rentInner {
    margin-top: 20px;
    @include for-phone-only {
      margin-top: 0;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 0 16px 32px 16px;
      z-index: 0;
      background-color: $white;
      box-shadow: -4px -3px 12px 5px $white;
    }
  }

  .rent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 536px;
    min-height: 80px;
    padding: 0 32px;
    @include for-phone-only {
      padding: 0 24px;
      z-index: 1;
      width: 100%;
    }
    background-color: $light-gray;
    border-radius: 16px;
    .rentText {
      font-family: mainBold, sans-serif;
      font-size: 1.25rem;
      line-height: 140%;
      color: $dark-blue;
      span {
        color: $pink;
      }
      @include for-phone-only {
        font-size: 1rem;
      }
    }
    .rentButton {
      width: 136px;
      height: 48px;
      font-family: mainBold, sans-serif;
      font-size: 1rem;
      line-height: 0.875rem;
      color: $white;
      background-color: $blue;
      border-radius: 12px;
      border: none;
      @include for-phone-only {
        width: 111px;
        height: 44px;
        font-size: 0.875rem;
      }
    }
  }
}
.loading {
  position: absolute;
  top: 50vh;
}

.dark {
  background-color: $dark-blue;
  .inner {
    .info {
      .title {
        color: $white;
      }
    }
    .link {
      color: $gray;
    }
    .activeLink {
      color: $blue;
    }
    .rent {
      background-color: $darkest-blue;
      .rentText {
        color: $white;
        span {
          color: $pink;
        }
      }
    }
  }
  .rentInner {
    @include for-phone-only {
      background-color: $dark-blue;
      box-shadow: -4px -3px 12px 5px $dark-blue;
    }
  }
}
</style>
