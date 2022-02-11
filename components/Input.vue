<template>
  <label>
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
    index: Number
  },
  data() {
    return {
      value: ''
    }
  },
  methods: {
  }
}
</script>

<style lang='scss' module>
@import "../assets/scss/vars";
.formItem {
  width: 100%;
  height: 56px;
  margin-top: 24px;
  padding: 21px 24px;

  background-color: $background-gray;
  color: $text-dark;
  border: none;
  border-radius: 12px;
  font-family: mainLight, sans-serif;
  font-size: 1rem;
  line-height: 0.875rem;
&::placeholder {
   color: $text-gray;
 }
&:focus {
   outline: none;
   box-shadow: 0 0 3px 2px rgba(73, 89, 255, 0.3);
 }
}
</style>
