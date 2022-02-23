<template>
  <nuxt-link :to='{ path: `${id}/specification` }'>
    <div :class=$style.vehicleCard>
      <img :class=$style.img :src='$props.vehicle.preview' alt='vehicle preview'>
      <div :class=$style.inform>
        <h3 :class=$style.title>{{ $props.vehicle.name }}</h3>
        <p :class=$style.description>{{ $props.vehicle.description }}</p>
        <p :class=$style.price>{{ $props.vehicle.rent }} $/h</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'VehicleCard',
  props: {
    vehicle: {
      default: null,
      type: Object
    }
  },
  computed: {
    id() {
      return this.$props.vehicle.id
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

  cursor: pointer;
  border-radius: 32px;
  background-color: $white;

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
      color: $dark-blue;
      line-height: 0.875rem;
    }

    .description {
      margin-top: 13px;
      max-width: 185px;
      font-family: mainLight, sans-serif;
      font-size: 0.75rem;
      line-height: 148%;
      color: $dark-gray;
    }

    .price {
      margin-top: 20px;
      font-family: mainBold, sans-serif;
      font-size: 0.875rem;
      color: $pink;
    }
  }
}
</style>
