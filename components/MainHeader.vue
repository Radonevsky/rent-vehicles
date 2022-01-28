<template>
  <header class='header'>
    HEADER
    <span :class="$style.test">TEST HEADER</span>
  </header>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>

<style lang='scss' module>
  .test {
    color: red;
  }
</style>
