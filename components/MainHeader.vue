<template>
  <header :class=$style.header>
     <div class='container'>
       <div :class='[$style.flexContainer, $style.flex]'>
         <div :class='[$style.logo, $style.flex]'>
           <img :class=$style.logoImg src='../static/images/svg/LogoLight.svg' alt='Logo'>
           <div :class=$style.logoDescription><p>World's first affordable airsharing</p></div>
         </div>
         <nav :class='[$style.nav, $style.flex]'>
           <div :class=$style.nightToggle>Night mod</div>
           <div :class='[$style.user, $style.flex]'>
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
export default {
  name: 'MainHeader'
}
</script>

<style lang='scss' module>
@import '../assets/scss/vars';
.header {
  height: 144px;
  align-items: center;
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
    }
    .logoDescription {
      font-family: mainLight, sans-serif;
      color: $text-gray;
      font-size: 1rem;
    }
  }

  .nav {
    max-width: 536px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .nightToggle {
      line-height: 1.5;
      padding-left: 40px;
      position: relative;

      font-family: mainLight, sans-serif;
      background: url("../static/images/svg/Moon.svg") no-repeat;
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
    }
    .userAlerts {
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      background: url("../static/images/svg/Bell.svg") no-repeat;
    }
    .user {
      width: 307px;
      justify-content: space-between;
      align-items: center;
      .userInfo {
        display: flex;
        align-items: center;
        .userName {
          font-family: mainBold, sans-serif;
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>
