<template>
  <div :class='$style.specification'>
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
  name: 'specChild'
}
</script>

<style lang='scss' module>
@import "assets/scss/vars";

.specification {
  color: $text-gray;

  .description {
    font-size: 0.875rem;
    line-height: 146%;
  }

  .title {
    margin: 32px 0;
    font-size: 1.5rem;
    color: $text-dark;
  }

  .features {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .featuresItem {
      display: flex;
      gap: 25px;
    }

    .icon {
      min-width: 80px;
      height: 96px;
      background-color: $background-gray;
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
      color: $text-dark;
    }

    .itemDescription {
      margin-top: 6px;
      font-size: 0.875rem;
      line-height: 146%;
    }
  }
}


</style>
