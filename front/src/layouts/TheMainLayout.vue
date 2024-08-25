<template>
    <div>
        <NavBarComponent/>
        <router-view />
    </div>
</template>

<script>
import NavBarComponent from "../components/app/NavBarComponent";

export default {
    name: "TheMainLayout",
    components: {NavBarComponent},
};
</script>

