<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import TheDefaultLayout from "./layouts/TheDefaultLayout";
import TheMainLayout from "./layouts/TheMainLayout";

export default {
  name: 'App',
  computed:{
    layout() {
      return (this.$route.meta.layout || TheDefaultLayout)
    }
  },
  components:  {
    TheDefaultLayout, TheMainLayout
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
