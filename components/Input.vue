<template>
  <label :class='$props.darkMode ? $style.dark : null'>
    <input
      v-model='value'
      :class='[$style.formItem, $style.name]'
      :placeholder=$props.name
      type='text'
      @change='$emit("inputChange", {id: $props.index, text: value})'
    >
  </label>

</template>

<script>
export default {
  name: 'MyInput',
  props: {
    name: String,
    index: Number,
    darkMode: Boolean
  },
  data() {
    return {
      value: ''
    }
  },
}
</script>

<style lang='scss' module>
@import "../assets/scss/vars";
.formItem {
  width: 100%;
  height: 56px;
  margin-top: 24px;
  padding: 21px 24px;

  background-color: $light-gray;
  color: $dark-blue;
  border: none;
  border-radius: 12px;
  font-family: mainLight, sans-serif;
  font-size: 1rem;
  line-height: 0.875rem;
&::placeholder {
   color: $dark-gray;
 }
&:focus {
   outline: none;
   box-shadow: 0 0 3px 2px rgba(73, 89, 255, 0.3);
 }
}
.dark {
  .formItem {
    background-color: $darkest-blue;
    color: $white;
    &::placeholder {
      color: $gray;
    }
    &:focus {
      box-shadow: 0 0 3px 2px rgba(73, 89, 255, 0.5);
    }
  }
}
</style>
