<template>
  <div :class=$style.vehicleCard>
    <img :class=$style.img src='https://loremflickr.com/cache/resized/65535_51380109979_37320c36bf_m_160_160_nofilter.jpg' alt='vehicle preview'>
    <div :class=$style.inform>
      <h3 :class=$style.title>XR-74 «Cooper»</h3>
      <p :class=$style.description>Brief description of the project, in a few lines.</p>
      <p :class=$style.price>1 278 $/h</p>
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
  gap: 25px;

  max-width: 373.33px;
  width: 100%;
  height: 164px;
  padding: 24px 32px;
  border-radius: 32px;

  background-color: $background-white;
  .img {
    display: inline-block;
    max-width: 88px;
    width: 100%;
    max-height: 88px;
    overflow: hidden;
    border-radius: 24px;
  }
  .inform {
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    .title {
      font-family: mainBold, sans-serif;
      font-size: 1rem;
      color: $text-dark;
      line-height: 0.875rem;
    }
    .description {
      margin-top: 13px;
      max-width: 185px;
      font-family: mainLight, sans-serif;
      font-size: 0.75rem;
      line-height: 148%;
      color: $text-gray;
    }
    .price {
      margin-top: 20px;
      font-family: mainBold, sans-serif;
      font-size: 0.875rem;
      color: $text-pink;
    }
  }
}
</style>
