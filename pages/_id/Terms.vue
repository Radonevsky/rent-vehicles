<template>
  <div :class=$style.terms>
    <p :class=$style.text>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
    </p>
    <p :class=$style.text>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
      mollit. Exercitation veniam consequat sunt nostrud amet.
    </p>
    <h3 :class=$style.title>Additional conditions:</h3>
    <ul :class=$style.list>
      <li :class=$style.listItem>
        <p :class=$style.text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </li>
      <li :class=$style.listItem>
        <p :class=$style.text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
      </li>
      <li :class=$style.listItem>
        <p :class=$style.text>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
          velit mollit.</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'termsChild'
}
</script>

<style lang='scss' module>
@import "assets/scss/vars";

.terms{
  .text {
    font-family: mainLight, sans-serif;
    font-size: 0.875rem;
    line-height: 146%;
    color: $dark-gray;
    &:nth-child(2) {
      margin-top: 16px;
    }
  }
  .title {
    margin: 22px 0 24px;
    font-size: 1rem;
    color: $dark-blue;
    line-height: 152%;
  }
  .list {
    .listItem {
      padding-left: 24px;
      position: relative;
      &:nth-child(n+1) {
        margin-top: 15px;
      }
      &:before {
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: $pink;
        position: absolute;
        left: 0;
        top: 8px;
      }
    }
  }
}
</style>
