<template>
<div class='container'>
  <div :class=$style.errorInner>
    <div :class=$style.errorText>
      <h2 :class=$style.title>An error has occurred</h2>
      <p :class=$style.text>Please refresh the page</p>
      <button @click='refreshPage' :class=$style.button>Reload page</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'loadError',
  methods: {
    refreshPage() {
      window.location.reload(true)
    }
  },
}
</script>

<style lang='scss' module>
@import "assets/scss/vars";
.errorInner {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 708px;
  background-color: $background-gray;
  border-radius: 48px;
}
.errorText {
  text-align: center;
}
.title {
  font-family: mainBold, sans-serif;
  font-size: 2.5rem;
  line-height: 120%;
  color: $text-dark;
}
.text {
  margin-top: 25px;
  font-family: mainLight, sans-serif;
  font-size: 0.875rem;
  line-height: 120%;
  color: $text-gray;
}
.button {
  margin-top: 42px;
  width: 161px;
  height: 48px;
  font-family: mainBold, sans-serif;
  font-size: 1rem;
  line-height: 0.875rem;
  color: $background-white;
  background-color: $text-blue;
  border-radius: 12px;
  border: none;
}
</style>
