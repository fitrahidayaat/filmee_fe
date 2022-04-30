<template>
  <main>
        <section class="info">
            <img :src="movie.image ? 'http://localhost:8000/movies/'+movie.image : ''" alt="" width="200" height="300" class="mg">
            <h2 class="mg">{{movie.title}}</h2>
            <h3 class="mg">{{movie.release_year}}</h3>
            <h3 class="mg">{{movie.genre ? movie.genre.name : '-'}}</h3>

            <q class="mg">{{movie.synopsis}}</q>
        </section>
        <section class="comments"> 
            <form @submit.prevent="postComment" autocomplete="off" class="my-comment">
                <div class="txt_field">
                    <input id="comment" type="text" required v-model="user_comment">
                    <span></span>
                    <label class="label-comment" for="comment">Join the discussion</label>
                </div>
                <input type="submit" value="COMMENT">
            </form>
            <div v-for="comment in movie.comment" :key="comment.id" class="box-comment">
                <h4>{{comment.user.username}}</h4>
                <hr>
                <q>{{comment.comment}}</q>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    data() {
        return {
            movie: {},
            movie_id: this.$route.params.movie_id,
            user_comment: '',
        }
    },
    methods: {
        getMovieDetail() {
            this.axios.get(`movies/${this.movie_id}`).then(response => {
                this.movie = response.data.movie
            }).catch(error => {
                console.log(error.response);
            })
        },
        setupCommentSection() {
            const comment = document.querySelector("#comment");
            const labelComment = document.querySelector(".label-comment");
            comment.addEventListener('keypress', (e) => {
                labelComment.innerHTML = "";
            })
            comment.addEventListener("input", () => {
                const value = comment.value.trim()
                if (value == ""){
                    labelComment.innerHTML = "Join the discussion";
                }
            })
        },
        postComment() {
            const body = {
                comment: this.user_comment,
                movie_id: this.movie_id,
                user: this.$store.getters.userDetail.id
            }
            this.axios.post('comments', body).then(response => {
                this.getMovieDetail()
                this.user_comment = ''
            }).catch(error => {
                console.log(error.response);
            })
        }
    },
    mounted() {
        this.setupCommentSection()
        this.getMovieDetail()
    },
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
    display: flex;
    flex-direction: column;
    align-items: center;
}
main .info{
    text-align: center;
}
form .txt_field{
    position: relative;
    border-bottom: 2px solid #adadad;
    margin: 10px 0;
}
.comments{
    width: 100%;
}
.txt_field input{
    width: 100%;
    padding: 0 5px;
    height: 40px;
    font-size: 16px;
    border: none;
    color: #fff;
    background: none;
    outline: none;
    font-family: 'Montserrat', cursive;
}
.txt_field label{
    font-family: 'Montserrat', cursive;
    position: absolute;
    top: 30%;
    left: 5px;
    color: #adadad;
    /* transform: translateY(-50%); */
    font-size: 16px;
    pointer-events: none;
    transition: .5s;
}
.txt_field span::before{
    content: '';
    position: absolute;
    top: 40px;
    left: 0;
    width: 0%;
    height: 2px;
    background: #fff;
    transition: .5s;
}
.txt_field input:focus ~ span::before,
.txt_field input:valid ~ span::before{
    width: 100%;
}
.box-comment{
    width: 100%;
    border: 2px solid #adadad;
    margin: 10px 0;
    padding: 20px;
}
hr{
    margin: 10px 0;
}
.my-comment input[type="submit"]{
    padding: 10px 15px;
    background-color: #fff;
    color: #000;
    font-family: "Montserrat";
    font-weight: 800;
    position: relative;
    right: 0;
    left: 100%;
    transform: translateX(-100%);
    cursor: pointer;
    margin-bottom: 10px;
}
.my-comment input[type="submit"]:hover{
    background-color: #adadad;
    color: #000;
}
.mg{
    margin: 10px 0;
}
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