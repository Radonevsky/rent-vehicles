<template>
  <header :class='[$style.header, darkMode ? $style.dark : null]' >
     <div class='container'>
       <div :class='[$style.flexContainer, $style.flex]'>
         <div :class='[$style.logo, $style.flex]'>
           <nuxt-link to='/'>
           <img
             :src='logo'
             :class=$style.logoImg
             alt='Logo'
             >
           </nuxt-link>
           <div :class=$style.logoDescription><p>World's first affordable airsharing</p></div>
         </div>
         <nav :class=$style.nav>

           <div
             v-if='!darkMode'
             :class=$style.nightToggle
             @click='darkModeOn'
           ><span>Night mod</span></div>
           <div
             v-else
             :class=$style.nightToggle
             @click='darkModeOff'
           >Day mod</div>

           <div :class=$style.user>
             <div :class=$style.alerts>
               <div :class=$style.userMessages></div>
               <div :class=$style.userAlerts></div>
             </div>
             <div :class='[$style.userInfo, $style.flex]'>
               <div :class=$style.userName>Bessie Cooper</div>
               <img :class=$style.userPhoto src='../static/images/UserPhoto.png' alt='User photo'>
             </div>
           </div>
         </nav>
       </div>
     </div> <!-- /container -->
  </header> <!-- /header -->
  <!--    <span :class=$style.test>TEST HEADER</span>-->
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'MainHeader',
  computed: {
    isLoading() {
      return this.$store.getters['vehicles/getIsDarkMode']
    },
    darkMode() {
      return this.$store.getters['vehicles/getIsDarkMode']
    },
    logo() {
      if (this.darkMode === true) {
        return require('../static/images/svg/LogoDark.svg')
      }
      return require('../static/images/svg/LogoLight.svg')
    }
  },
  methods: {
    ...mapMutations({
      darkModeOn: 'vehicles/SET_DARK_MODE_ON'
    }),
    ...mapMutations({
      darkModeOff: 'vehicles/SET_DARK_MODE_OFF'
    })
  },
}
</script>

<style lang='scss' module>
@import '../assets/scss/vars';
@import '../assets/scss/mixins';

.header {
  height: 136px;
  align-items: center;
  @include for-phone-only {
    height: 56px;
    padding: 12px 16px;
  }
  .flex {
    display: flex;
  }
  .flexContainer {
    justify-content: space-between;
    height: 100%;
  }
  .logo {
    justify-content: space-between;
    align-items: center;
    max-width: 490px;
    width: 100%;
    .logoImg {
      display: inline-block;
      max-width: 170px;
      height: auto;
      margin-top: 3px;
      @include for-phone-only {
        height: 32px;
        width: 113px;
      }
    }
    .logoDescription {
      font-family: mainLight, sans-serif;
      color: $dark-gray;
      font-size: 1rem;
      @include for-tablet-landscape {
        display: none;
      }
    }
  }

  .nav {
    display: flex;
    max-width: 536px;
    width: 100%;
    justify-content: space-between;
    @include for-tablet-landscape {
      justify-content: end;
    }
    @include for-phone-only {
      max-width: 148px;
    }
    align-items: center;
    .nightToggle {
      line-height: 1.5;
      padding-left: 40px;
      position: relative;
      min-width: 24px;
      min-height: 24px;
      color: $dark-gray;

      font-family: mainLight, sans-serif;
      background: url("../static/images/svg/Moon.svg") no-repeat;
      @include for-tablet-landscape {
        padding: 0;
        span {
          display: none;
        }
      }
      @include for-phone-only {
        margin-right: 1rem;
      }
    }
    .alerts {
      display: flex;
    }
    .userMessages {
      margin-right: 1.4rem;
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      background: url("../static/images/svg/Message.svg") no-repeat;
      @include for-phone-only {
        margin-right: 1rem;
      }
    }
    .userAlerts {
      margin-right: 1.4rem;
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      background: url("../static/images/svg/Bell.svg") no-repeat;
      @include for-phone-only {
        margin-right: 24px;
      }
    }
    .user {
      display: flex;
      width: 307px;
      justify-content: space-between;
      align-items: center;
      @include for-tablet-landscape {
        justify-content: end;
      }
      .userInfo {
        display: flex;
        align-items: center;
        .userName {
          font-family: mainBold, sans-serif;
          margin-right: 1rem;
          @include for-phone-only {
            display: none;
          }
        }
        .userPhoto {
          border-radius: 50%;
          @include for-phone-only {
            width: 32px;
            height: 32px;
          }
        }
      }
    }
  }
}

.dark {
  background-color: $dark-blue;
  .logo {
    .logoImg {
    }
    .logoDescription {
      color: $gray;
    }
  }
  .nav {
    .nightToggle {
      color: $gray;
      background: url("../static/images/svg/Sun.svg") no-repeat;
    }
    .userMessages {
      background: url("../static/images/svg/MessageDark.svg") no-repeat;
    }
    .userAlerts {
      background: url("../static/images/svg/BellDark.svg") no-repeat;
    }
    .userName {
      color: $white;
    }
  }

}
</style>
