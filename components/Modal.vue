<template>
  <div :class=$style.wrapper>
    <div :class=$style.modal>
      <div :class=$style.modalHeader>
        <h2 :class=$style.title>Add new vehicle</h2>
        <button :class=$style.close @click='closeModal'></button>
      </div>
      <form :class=$style.form @submit.prevent='addNew'>
        <div :class=$style.addImgWrapper>
          <div :class=$style.addImg>
            <input id='add' type='file'>
          </div>
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
      ],
      currentId: 1
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
    },
    addNew() {
      this.$store.commit('vehicles/SET_CUSTOM', {
        id: `custom${this.currentId}`,
        name: this.formFields[0].value,
        type: "custom",
        description: this.formFields[1].value,
        specifications_text: "Consectetur esse ex et sunt. Excepteur irure fugiat adipisicing ipsum reprehenderit laboris aliqua Lorem minim nostrud mollit reprehenderit. Voluptate fugiat pariatur pariatur eu incididunt. Laborum reprehenderit sit laboris magna dolore fugiat officia consectetur officia tempor eiusmod. Exercitation Lorem laboris amet ipsum. Dolor exercitation aute incididunt labore cupidatat eu ipsum laborum occaecat sit Lorem.\n\nEst aliqua culpa dolore occaecat incididunt consectetur aute cupidatat velit sint veniam qui adipisicing. Aliqua consequat labore in eiusmod Lorem cillum irure culpa nisi. Mollit ad ad incididunt fugiat dolore officia commodo occaecat labore. Ut elit consectetur consectetur dolore tempor ad culpa consequat. Qui dolor cillum quis exercitation eiusmod ad nulla aute.",
        team_text: "Ex elit qui ullamco quis ex consectetur nulla aliqua adipisicing amet tempor duis. Incididunt cillum reprehenderit dolore enim ea. Minim duis ipsum est ut id sint voluptate. Quis ad laborum amet fugiat nulla deserunt non ad adipisicing excepteur ullamco sint quis. Elit qui sit irure proident quis Lorem et eiusmod do quis.",
        term_text: "Ut consectetur dolor labore non velit voluptate sint enim cillum ad labore. Adipisicing minim sunt labore sit anim culpa cillum laboris proident dolor do sint. In esse cupidatat id sit eiusmod culpa quis.\n\nIn ullamco pariatur sit in excepteur ipsum incididunt reprehenderit aliqua minim. Deserunt cillum consectetur ut velit fugiat cupidatat elit ullamco adipisicing pariatur. Aute qui qui magna culpa proident ad labore qui est.\n\nAmet velit nisi ea eiusmod reprehenderit cillum aliqua do ut. Consectetur elit nostrud nulla fugiat laborum aliqua sit. Laboris magna consectetur qui ex. Sunt irure magna quis amet dolore.",
        rent: this.formFields[2].value,
        preview: "https://loremflickr.com/160/160/airship?random=5f2bb90af01f47feb86b5da0",
        image: "https://loremflickr.com/900/900/airship"
      },)
      this.currentId += 1
      this.closeModal()
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
  min-height: 582px;
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
  min-height: 78px;
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
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
}

.button {
  margin-top: 40px;
  width: 100%;
  min-height: 56px;
  background-color: $text-blue;
  color: $background-white;
  border: none;
  border-radius: 12px;
}


</style>
