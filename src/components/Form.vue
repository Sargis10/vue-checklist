<template>
  <form class="form" @submit.prevent="addTodo">
    <div class="form__row">
      <div class="form__control">
        <input type="text" class="form__input" v-model="inputVal" />
      </div>

      <div class="form__control form__control--btn">
        <button class="form__btn" type="submit">Add todo</button>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'Form',
    data: () => ({
      inputVal: '',
    }),
    methods: {
      addTodo() {
        if (this.inputVal && this.inputVal !== '') {
          this.$store.commit('ADD_TODO', this.inputVal)
          this.inputVal = ''
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .form {
    margin-bottom: 20px;

    &__row {
      display: flex;
      justify-content: space-between;
    }

    &__control {
      flex: 0 0 100%;
      max-width: 75%;

      &--btn {
        max-width: max-content;
      }
    }

    &__input {
      width: 100%;
      border: 0;
      border-bottom: 1px solid #ced4da;
      border-radius: 0;
      outline: 0;
      box-shadow: none;
      transition: border-color 0.15s ease-in-out;
      height: 40px;
      padding: 5px 15px;
      background-color: transparent;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;

      &:focus {
        border-bottom: 1px solid #4285f4;
        box-shadow: 0 1px 0 0 #4285f4;
      }
    }

    &__btn {
      height: 40px;
      border: 1px solid #ced4da;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background: transparent;
      padding: 7.5px 20px;
      transition: border-color 0.15s ease-in-out;
      cursor: pointer;
      outline: 0;

      &:hover,
      &:active {
        border-color: #4285f4;
        box-shadow: 1px 1px 0 0 #4285f4;
      }
    }
  }
</style>
