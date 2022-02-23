<template>
  <div class='container'>
    <div :class=$style.errorInner>
      <div :class=$style.errorText>
        <h2 :class=$style.title>404 Page not found</h2>
        <p :class=$style.text>Go back to home page</p>
        <nuxt-link to='/' :class=$style.link>Home page</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notFound',
  layout: 'Vehicles',
  props: ['error'],
}
</script>

<style lang='scss' module>
@import "assets/scss/vars";
.errorInner {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 708px;
  background-color: $light-gray;
  border-radius: 48px;
}
.errorText {
  text-align: center;
}
.title {
  font-family: mainBold, sans-serif;
  font-size: 2.5rem;
  line-height: 120%;
  color: $dark-blue;
}
.text {
  margin-top: 25px;
  font-family: mainLight, sans-serif;
  font-size: 0.875rem;
  line-height: 120%;
  color: $dark-gray;
}
.link {
  margin-top: 42px;
  padding: 17px 32px;
  font-family: mainBold, sans-serif;
  font-size: 1rem;
  line-height: 0.875rem;
  color: $white;
  background-color: $blue;
  border-radius: 12px;
  border: none;
}
</style>
