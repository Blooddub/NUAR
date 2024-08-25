<template>
  <div class="main">
    <h1>Игры</h1>
    <ListCardComponent/>
  </div>
</template>
  
<script>
import ListCardComponent from "../components/ListCardComponent"

  export default {
    name: 'MainView',
    data() {
        return {
        }  
    },
    components: {ListCardComponent}
  }
  </script>
  