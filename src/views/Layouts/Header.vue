<template>
    <nav>
        <span class="logo">filmee</span>
        <ul v-if="isLoggedIn">
            <li class="nav-list">
                <a href="" class="nav-link" @click="logout">Logout</a>
            </li>
        </ul>
        <ul v-else>
            <li class="nav-list">
                <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-list">
                <router-link class="nav-link" to="/signup">Signup</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isLoggedIn: this.$store.getters.isLoggedIn
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout').then(() => {
                this.$router.push('/')
            })
        }
    },
    mounted() {
        console.log(this.$route);
    }
}
</script>

<style>
</style>