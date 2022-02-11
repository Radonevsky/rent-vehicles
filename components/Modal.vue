<template>
  <div :class=$style.wrapper>
    <div :class=$style.modal>
      <div :class=$style.modalHeader>
        <h2 :class=$style.title>Add new vehicle</h2>
        <button :class=$style.close @click='closeModal'></button>
      </div>
      <form :class=$style.form @submit.prevent='addNew'>
        <div :class=$style.addImgWrapper>
          <div :class=$style.addImg></div>
          <input id='add' type='file'>
        </div>
        <Input
          v-for='item in formFields'
          :key=item.id
          :name=item.name
          :index=item.id
          @inputChange='inputChange($event)'
        />
        <button :class=$style.button type='submit'>Complete</button>
      </form>
    </div>
  </div>
</template>

<script>
import Input from './Input'

export default {
  name: 'ModalAdd',
  components: {
    Input
  },
  data() {
    return {
      formValues: [

      ],
      formFields: [
        {
          id: 1,
          name: 'Name',
          value: ''
        },
        {
          id: 2,
          name: 'Description',
          value: ''
        },
        {
          id: 3,
          name: 'Rent price',
          value: ''
        },
      ]
    }
  },
  mounted() {
    document.body.style.overflow = 'hidden'
  },
  destroyed() {
    document.body.style.overflow = ''
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    inputChange(value) {
      this.formFields[value.id-1].value = value.text
      console.log(this.formFields[value.id-1].value)
    },
    addNew() {
      console.log(this.formFields)
    }
  }
}
</script>

<style lang='scss' module>
@import "assets/scss/vars";

.wrapper {
  height: 100%;
  width: 100%;
  backdrop-filter: blur(8px);
  background: $background-modal;

  position: fixed;
  top: 0;
  right: 0;
}
.modal {
  padding: 64px 72px;
  max-width: 600px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 48px 0 0 48px;

  background-color: $background-white;
}

.modalHeader {
  display: flex;
  justify-content: space-between;
  .title {
    font-family: mainBold, sans-serif;
    font-size: 2.5rem;
    line-height: 120%;
    color: $text-dark;
  }
  .close {
    width: $button-size;
    height: $button-size;
    position: relative;

    background-color: $background-gray;
    border-radius: 16px;
    border: none;
    &:before, &:after {
      content: '';
      position: absolute;
      top: calc(50% - 16px / 2);
      left: 50%;
      width: 2px;
      height: 16px;
      background-color: $text-dark;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
}
.form {
  display: flex;
  align-content: space-between;
  flex-direction: column;
  height: 100%;
}
.addImgWrapper {
  width: 100%;
  height: 348px;
  margin-top: 40px;

  background-color: $background-gray;
  position: relative;
  border-radius: 24px;
  .addImg {
    cursor: pointer;
    position: absolute;
    top: calc(50% - 24px);
    left: calc(50% - 24px);
    width: 48px;
    height: 48px;
    background-color: $background-white;
    border-radius: 16px;
    background-image: url("../static/images/svg/AddImg.svg");
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  input {
    opacity: 0;
    pointer-events: none;
    z-index: -1;
  }
}

.button {
  margin-top: 40px;
  width: 100%;
  height: 56px;
  background-color: $text-blue;
  color: $background-white;
  border: none;
  border-radius: 12px;
}


</style>
