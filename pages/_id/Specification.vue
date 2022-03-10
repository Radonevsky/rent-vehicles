<template>
  <div :class='[$style.specification, darkMode ? $style.dark : null]'>
    <p :class='$style.description'>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
      mollit. Exercitation veniam consequat sunt nostrud amet.
    </p>
    <h2 :class='$style.title'>Features:</h2>
    <div :class='$style.features'>
      <div :class='$style.featuresItem'>
        <div :class='[$style.icon, $style.cup]'></div>
        <div>
          <h3 :class='$style.itemTitle'>A challenge for a true champion</h3>
          <p :class='$style.itemDescription'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit.
          </p>
        </div>
      </div>
      <div :class='$style.featuresItem'>
        <div :class='[$style.icon, $style.pilot]'></div>
        <div>
          <h3 :class='$style.itemTitle'>Pilot's sweaty hands</h3>
          <p :class='$style.itemDescription'>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'specChild',
  computed: {
    darkMode()  {
      return this.$store.getters['vehicles/getIsDarkMode']
    }
  }
}
</script>

<style lang='scss' module>
@import "assets/scss/vars";
@import "assets/scss/mixins";

.specification {
  color: $dark-gray;

  .description {
    font-size: 0.875rem;
    line-height: 146%;
  }

  .title {
    margin: 32px 0;
    font-size: 1.5rem;
    color: $dark-blue;
    @include for-phone-only {
      margin: 20px 0;
      font-size: 1.25rem;
    }
  }

  .features {
    display: flex;
    flex-direction: column;
    gap: 16px;
    @include for-phone-only {
      gap: 12px;
    }

    .featuresItem {
      display: flex;
      gap: 25px;
    }

    .icon {
      min-width: 80px;
      height: 96px;
      background-color: $light-gray;
      border-radius: 16px;
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }

    .cup {
      background-image: url("../../static/images/svg/Cup.svg");
    }
    .pilot {
      background-image: url("../../static/images/svg/Man.svg");
    }

    .itemTitle {
      margin-top: 12px;
      font-family: mainBold, sans-serif;
      font-size: 1rem;
      line-height: 152%;
      color: $dark-blue;
      @include for-phone-only {
        margin-top: 4px;
      }
    }

    .itemDescription {
      margin-top: 6px;
      font-size: 0.875rem;
      line-height: 146%;
      @include for-phone-only {
        margin-top: 3px;
      }
    }
  }
}

.dark {
  .title {
    color: $white;
  }
  .description {
    color: $gray;
  }
  .features {
    .icon {
      background-color: $darkest-blue;
    }
    .itemTitle {
      color: $white;
    }
    .cup {
      background-image: url("../../static/images/svg/CupLightGray.svg");
    }
    .pilot {
      background-image: url("../../static/images/svg/ManLightGray.svg");
    }
  }
  .itemDescription {
    color: $gray;
  }
}

</style>
