<template>
  <div :class='[$style.team, darkMode ? $style.dark : null]'>
    <p :class='$style.description'>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    </p>
    <h2 :class=$style.title>Qualified specialists</h2>
    <ul :class='$style.listSpecialists'>
      <li :class='$style.itemSpecialists'>
        <img :class='$style.img' src='../../static/images/Marvin.jpg' alt='McKinney'>
        <div><h3 :class='$style.itemName'>Marvin McKinney</h3>
          <p :class='$style.itemProfession'>Pilot assistant</p></div>
      </li>
      <li :class='$style.itemSpecialists'>
        <img :class='$style.img' src='../../static/images/Savannah.jpg' alt='Nguyen'>
        <div><h3 :class='$style.itemName'>Savannah Nguyen</h3>
          <p :class='$style.itemProfession'>Mechanic</p></div>
      </li>
      <li :class='$style.itemSpecialists'>
        <img :class='$style.img' src='../../static/images/Courtney.jpg' alt='Henry'>
        <div><h3 :class='$style.itemName'>Courtney Henry</h3>
          <p :class='$style.itemProfession'>Stewardess</p></div>
      </li>
    </ul>
    <p :class=$style.description>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
      mollit. Exercitation veniam consequat sunt nostrud amet.
    </p>
  </div>
</template>

<script>
export default {
  name: 'teamChild',
  computed: {
    darkMode() {
      return this.$store.getters['vehicles/getIsDarkMode']
    }
  }
}
</script>

<style lang='scss' module>
@import "../../assets/scss/vars";
@import "../../assets/scss/mixins";

.team {
  .description {
    font-family: mainLight, sans-serif;
    font-size: 0.875rem;
    line-height: 146%;
    color: $dark-gray;

  }
  .title {
    margin: 32px 0;
    font-size: 1.5rem;
    color: $dark-blue;
    @include for-phone-only {
      font-size: 1rem;
    }

  }
  .listSpecialists {
    display: flex;
    gap: 25px;
    margin-bottom: 31px;
    @include for-phone-only {
      flex-wrap: wrap;
    }
  }
  .itemSpecialists {
    @include for-phone-only {
      display: flex;
      gap: 16px;
    }
  }
  .img {
    max-width: 162px;
    width: 100%;
    min-height: 96px;
    height: auto;
    border-radius: 16px;
    overflow: hidden;
  }
  .itemName {
    margin-top: 12px;
    font-family: mainBold, sans-serif;
    font-size: 1rem;
    line-height: 0.875rem;
    color: $dark-blue;
  }
  .itemProfession {
    margin-top: 9px;
    font-family: mainLight, sans-serif;
    font-size: 0.75rem;
    line-height: 148%;
    color: $dark-gray;
  }
}

.dark {
  .description {
    color: $gray;
  }
  .title {
    color: $white;
  }
  .listSpecialists {
    display: flex;
    gap: 25px;
    margin-bottom: 31px;
  }
  .itemName {
    color: $white;
  }
  .itemProfession {
    color: $gray;
  }
}
</style>
