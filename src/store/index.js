import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    ADD_TODO(state, title) {
      const newTodo = {
        id: Math.floor(Math.random() * 10000),
        title: title,
        complete: false,
      }
      state.todos.push(newTodo)
    },

    COMPLETE_TODO(state, id) {
      const todoIndex = state.todos.findIndex(todo => todo.id === id)
      state.todos[todoIndex].complete = !state.todos[todoIndex].complete
    },

    UPDATE_TODO(state, payload) {
      const todoIndex = state.todos.findIndex(todo => todo.id === payload.id)
      state.todos[todoIndex].title = payload.title
    },

    DELETE_TODO(state, id) {
      const todoIndex = state.todos.findIndex(todo => todo.id === id)

      if (todoIndex > -1) {
        state.todos.splice(todoIndex, 1)
      }
    },
  },
  actions: {},
  modules: {},
})
