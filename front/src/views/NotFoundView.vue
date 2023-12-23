<template>
    <div class="container">
  <h1>Not found <span>:(</span></h1>
  <a href="#" 
        @click.prevent="reternlogin"
      >
       Login
      </a>
</div>
</template>



<script>
export default {
    name: 'not-found-view',
    methods: {
        reternlogin() {
            this.$router.push('/login')
        }
    }
}
</script>