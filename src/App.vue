<template>
  <div id="app">
    <div class="wrapper">
      <Form />
      <List />
    </div>
  </div>
</template>

<script>
  import Form from './components/Form'
  import List from './components/List'

  export default {
    name: 'App',
    components: { Form, List },
  }
</script>

<style lang="scss">
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    margin: 0;
  }

  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .wrapper {
    width: 100%;
    max-width: 500px;
    padding: 20px 0;
    overflow-y: auto;
  }
</style>
