<template>
  <div :class=$style.vehicleCard>
    <img :class=$style.img src='https://loremflickr.com/160/160/airship?random=5f2bb90af01f47feb86b5da0' alt='vehicle preview'>
    <div :class=$style.inform>
      <h3 :class=$style.title>XR-74 «Cooper»</h3>
      <p :class=$style.description>Brief description of the project, in a few lines.</p>
      <p :class=$style.price>1 278$/h</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VehicleCard',
  props: {
    title: {
      type: String,
      default: "no title"
    }
  }
}
</script>

<style lang='scss' module>
@import "assets/scss/vars";

.vehicleCard {
  display: flex;
  gap: 24px;

  max-width: 373.33px;
  width: 100%;
  height: 164px;
  padding: 25px 32px;
  border-radius: 32px;

  background-color: $background-white;
  img {
    display: inline-block;
    max-width: 84px;
    width: 100%;
    max-height: 84px;
    overflow: hidden;
    border-radius: 24px;
  }
  .inform {
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    .title {
      font-family: mainBold, sans-serif;
      color: $text-dark;
    }
    .description {
      margin-top: 12px;
      font-family: mainLight, sans-serif;
      font-size: 0.75rem;
    }
    .price {
      margin-top: 16px;
      font-family: mainBold, sans-serif;
      font-size: 0.875rem;
      color: $text-pink;
    }
  }
}
</style>
