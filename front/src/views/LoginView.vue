<template>
    <div class="login">
        <form class="card auth-card" @submit.prevent="onSubmit">
            <div class="card-content">
                <span class="card-title">Log In</span>
                <br>
                <div class="input-field">
                    <input 
                        id="login" 
                        type="text" 
                        v-model.trim="login"
                    >
                    <label for="login">
                        Login 
                        <span class="required">*</span>
                    </label>
                </div>
                <div class="input-field">      
                    <input 
                        id="password" 
                        type="password" 
                        v-model.trim="password"
                    >
                    <label for="password">
                        Password 
                        <span class="required">*</span>
                    </label>
                </div>
            </div>
            <div class="card-action">
                <div>
                    <button
                        type="submit"
                    >
                        Войти
                    </button>
                </div>
            </div>
        </form>

        <div>
            <a href="" >
                No account?
            </a>
        </div>

    </div>
  </template>
  


  <script>
  export default {
    name: 'LoginView',
    data() {
    return {
      login: '',
      password: ''
    }
  },
    methods: {
        onSubmit() {
            const user = 
            {
                login: this.login,
                password: this.password,
            }
            console.log(user);
            this.$router.push('/main')
        },
    },
    components: {}
  }
  </script>
  