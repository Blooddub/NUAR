<template>
    <nav class="navbar">
        <!-- Navbar brand -->
        <router-link class="brand" to="#" >НУАР</router-link>
        <!-- Collapsible wrapper -->
        <div >
            <ul>
                <li>
                    <router-link to="/main">Главная</router-link>
                </li>
                <li>
                    <router-link to="/rules">Правила</router-link>
                </li>
            </ul>
        </div>
        <div class="right">
            <button @click.prevent="logout">
                <img src="@/assets/icons/logout_eyow1awtg9ml.svg" alt="Logout">
            </button>
        </div>
    </nav>

</template>



<script>

export default {
    name: "NavBarComponent",
    methods: {
        logout() {
            console.log("LogOut");
            this.$router.push('/login')
        },
    },

}
</script>



<style scoped>

a {
    text-decoration: none;
}

.navbar {
    background-color: #333333;
    display: flex;
    align-items: center;
}

.navbar a {
    color: #e7e7e7;
}

.navbar ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items:center;
}

.navbar .brand {
    display: block;
    color: #e7e7e7;
    padding: 0 24px;
    font-size: 24px;
}

.navbar ul li a {
    color: #e7e7e7;
    padding: 24px;
    display: block;
}

.navbar ul a:hover,
.navbar ul a:focus {
    background-color: #272727;
}

.navbar .right {
    margin-left: auto; 
    margin-right: 20px;
}

.navbar .right button{
    border: none;
    background: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
}

.navbar .right button img{
    width: 20px;
    height: 20px;
}

</style>