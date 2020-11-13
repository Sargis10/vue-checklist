<template>
  <li :class="['list-item', { 'list-item--complete': todo.complete }]">
    <input
      class="checkbox"
      type="checkbox"
      @change="completeTodoHandler(todo.id)"
    />
    <div
      class="title"
      contenteditable
      :value="todo.title"
      v-html="todo.title"
      @keyup.enter.prevent="updateTodoHandler($event, todo.id)"
    />
    <button class="delete" @click.prevent="deleteTodoHandler(todo.id)">
      X
    </button>
  </li>
</template>

<script>
  export default {
    name: 'ListItem',
    props: {
      todo: {
        type: Object,
        default: () => {},
      },
    },
    methods: {
      completeTodoHandler(id) {
        this.$store.commit('COMPLETE_TODO', id)
      },

      updateTodoHandler(e, id) {
        const title = e.target.innerText.replace(/(\r\n|\n|\r)/gm, '')
        this.$store.commit('UPDATE_TODO', { id, title })
      },

      deleteTodoHandler(id) {
        this.$store.commit('DELETE_TODO', id)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .list-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid #ced4da;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    .checkbox {
      margin-right: 10px;
    }

    .title {
      margin-right: auto;
      outline: 0;
    }

    .delete {
      padding: 5px 10px;
      border: 1px solid #ced4da;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background: transparent;
      transition: border-color 0.15s ease-in-out;
      cursor: pointer;
      outline: 0;

      &:hover,
      &:active {
        border-color: #4285f4;
        box-shadow: 1px 1px 0 0 #4285f4;
      }
    }

    &--complete {
      background: #ebebeb;

      .title {
        text-decoration: line-through;
      }
    }
  }
</style>
