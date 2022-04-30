<template>
<div >
  <main style="display:flex; flex-direction:column; align-items:flex-start">
        <router-link class="new-post btn" to="/post-film">Post Film</router-link>
        <section v-for="genre in genres" :key="genre.id">
            <h1 style="text-transform:capitalize">{{genre.name}}</h1>
            <hr>
            <div class="container">
                <img v-for="movie in getMovieByGenre(genre.id)" :key="movie.id" @click="getDetailFilm(movie.id)" class="box" :src="'http://localhost:8000/movies/'+movie.image" :alt="movie.image">
            </div>
        </section>
    </main>

</div>
</template>

<script>
export default {
    data() {
        return {
            movies: [],
            genres: [],
        }
    },
    methods: {
        getMovies() {
            this.axios.get('movies').then(response => {
                this.movies = response.data.movies
            }).catch(error => {
                console.log(error.response);
            })
        },
        getDetailFilm(movie_id) {
            console.log(movie_id);
            this.$router.push('/detail-film/'+movie_id)
        },
        getGenres() {
            this.axios.get('genres').then(response => {
                this.genres = response.data.genre
            }).catch(error => {
                console.log(error.response);
            })
        },
        getMovieByGenre(genre_id) {
            return this.movies.filter(movie => movie.genre.id == genre_id)
        }
    },
    mounted() {
        this.getGenres(),
        this.getMovies()
    }
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    background-color: #000;
    color: #fff;
    font-family: 'Fredoka One', cursive;
}
a.nostyle:link, a.nostyle:visited {
    text-decoration: inherit;
    color: inherit;
}
.logo{
    font-size: 60px;
}
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    background-color: #000;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    padding: 40px 100px;
}
nav ul{
    list-style: none;
    display: flex;
    justify-content: space-around;
}
nav ul li{
    margin: 10px;
    border: 1px solid #fff;
    background: none;
    padding: 10px 0;
    font-family: "montserrat";
    transition: 0.8s;
    overflow: hidden;
    position: relative;
    color: #fff;
    text-decoration: none;
    font-size: 20px;
}
.nav-link{
    background: none;
    padding: 10px 20px;
    font-family: "montserrat";
    cursor: pointer;
    transition: 0.8s;
    position: relative;
    overflow: hidden;
    color: #fff;
    text-decoration: none;
    font-size: 20px;
    font-family: "montserrat";
}
.nav-link:hover{
    color: #000;
}
.nav-link::before{
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background: #fff;
    z-index: -1;
    transition: 0.8s;
    bottom: 0;
    border-radius: 50% 50% 0 0;
}
.nav-link:hover::before{
    height: 180%;
}
main{
    padding: 20px 100px;
    position: relative;
    font-family: "Montserrat";
}
.container{
    width: 100%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
}
section {
    width: 100%;
}
.box{
    margin: 5px;
    height: 200px;
    width: 140px;
    background-color: orange;
}
.new-post{
    font-size: 24px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}
.btn{
    display: inline-block;
    text-decoration: none;
    border: 1px solid #fff;
    background: none;
    padding: 10px 20px;
    font-size: 24px;
    font-family: 'Montserrat', cursive;
    cursor: pointer;
    margin-top: 20px;
    transition: 0.8s;
    position: relative;
    overflow: hidden;
    color: #000;
}
.btn:hover{
    color: #fff;
}
.btn::before{
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 0%;
    background: #fff;
    z-index: -1;
    transition: 0.8s;
    top: 0;
    border-radius: 0 0 50% 50%;
    height: 180%;
}
.btn:hover::before{
    height: 0%;
}
@media screen and (max-width: 560px) {
    nav{
        /* flex-direction: column; */
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20px 20px;
    }
    nav a{
        width: 100%;
        text-align: center;
    }
    main{
        padding: 20px 20px;
    }
}
</style>