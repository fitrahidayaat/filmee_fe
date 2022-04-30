<template>
    <nav>
        <ul class="ul1">
            <li class="nav-list">
                <router-link to="/list-film" class="nav-link">Kembali</router-link>
            </li>
        </ul>
        <a to="/" class="nostyle">
            <span class="logo">filmee</span>
        </a>
        <ul class="ul2">
            <li class="nav-list">
                <a href="" class="nav-link" @click="logout">Logout</a>
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

<style scoped>
@media screen and (max-width: 768px) {
    nav{
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    main{
        padding: 0 30px;
        margin-top: -40px;
    }
    nav a{
        order: 1;
        width: 100%;
        text-align: center;
    }
    nav .ul1{
        order: 2;
    }
    nav .ul2{
        order: 3;
    }
}
</style>