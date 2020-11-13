<template>
  <ul class="list">
    <ListItem v-for="todo in todos" :todo="todo" :key="todo.id" />
  </ul>
</template>

<script>
  import ListItem from './ListItem'
  import { mapState } from 'vuex'

  export default {
    name: 'List',
    components: { ListItem },
    computed: mapState({
      todos: state => state.todos,
    }),
  }
</script>

<style lang="scss" scoped>
  .list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
