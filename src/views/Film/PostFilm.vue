<template>
    <main>
        <form @submit.prevent="postFilm(e)" autocomplete="off">
            <div class="txt_field">
                <input id="judul" type="search" required v-model="title">
                <span></span>
                <label for="judul">Judul Film</label>
            </div>
            <div class="txt_field">
                <input id="sinopsis" type="text" required v-model="synopsis">
                <span></span>
                <label for="sinopsis">Sinopsis</label>
            </div>
            <div class="txt_field">
                <input id="tahun" type="number" required v-model="release_year">
                <span></span>
                <label for="tahun">Tahun Rilis</label>
            </div>
            <div class="txt_field">
                <input id="comment" type="text" required v-model="comment">
                <span></span>
                <label for="comment">Comment</label>
            </div>
            <div class="notxt_field">
                <label for="genre">Genre</label>
                <hr>
                <select v-model="genre_id" name="genre" id="genre" required>
                    <option value="">Select a genre</option>
                    <option v-for="genre in genres" :key="genre.id" :value="genre.id" style="text-transform: capitalize;">{{genre.name}}</option>
                </select>
            </div>
            <div class="notxt_field">
                <label>Gambar</label>
                <hr>
                <input ref="file" type="file" required @change="selectImage()">
                <span></span>
                <img v-if="previewImage" :src="previewImage" alt="" width="100" height="100">
            </div>
            <input type="submit" value="Post">
        </form>
    </main>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            synopsis: '',
            release_year: '',
            comment: '',
            genres: [],
            genre_id: '',
            image: '',
            previewImage: '',
            currentImage: '',
        }
    },
    methods: {
        getGenres() {
            this.axios.get('genres').then(response => {
                console.log(response.data);
                this.genres = response.data.genre
            }).catch(error => {
                console.log(error.response);
            })
        },
        selectImage() {
            this.currentImage = this.$refs.file.files.item(0);
            this.previewImage = URL.createObjectURL(this.currentImage);
            this.progress = 0;
            this.message = "";
        },

        postFilm(e) {
            // var image = e.target.files[0];
            var formData = new FormData();
            formData.append('title', this.title);
            formData.append('synopsis', this.synopsis);
            formData.append('release_year', this.release_year);
            formData.append('comment', this.comment);
            formData.append('genre_id', this.genre_id);
            formData.append('image', this.currentImage);

            this.axios.post('movies', formData).then(response => {
                this.$router.push('/list-film')
            }).catch(error => {
                console.log(error.response);
            })
        },
    },
    mounted() {
        this.getGenres()
    }
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

a:link,
a:visited {
    text-decoration: inherit;
    color: inherit;
}

body {
    background-color: #000;
    color: #fff;
    font-family: 'Fredoka One', cursive;
}

.logo {
    font-size: 60px;
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    padding: 40px 100px;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
}

nav ul li {
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

.nav-link {
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

.nav-link:hover {
    color: #000;
}

.nav-link::before {
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

.nav-link:hover::before {
    height: 180%;
}

main {
    padding: 20px 100px;
    position: relative;

}

form .notxt_field {
    margin: 30px 0;
}

.notxt_field label {
    font-size: 16px;
    display: block;
    position: relative;
    left: 5px;
    font-family: 'Montserrat', cursive;
    bottom: 7px;
}

.notxt_field hr {
    margin-bottom: 16px;
    background-color: #fff;
}

#genre {
    width: 100%;
    padding: 0 5px;
    height: 40px;
    font-size: 16px;
    border: 2px solid #fff;
    color: #fff;
    background: none;
    outline: none;
    font-family: 'Montserrat', cursive;
}

#genre option {
    color: #000;
}

form {
    width: 100%;
}

form .txt_field {
    position: relative;
    border-bottom: 2px solid #adadad;
    margin: 30px 0;
}

.txt_field input {
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

.txt_field label {
    font-family: 'Montserrat', cursive;
    position: absolute;
    top: 50%;
    left: 5px;
    color: #adadad;
    transform: translateY(-50%);
    font-size: 16px;
    pointer-events: none;
    transition: .5s;
}

.txt_field span::before {
    content: '';
    position: absolute;
    top: 40px;
    left: 0;
    width: 0%;
    height: 2px;
    background: #fff;
    transition: .5s;
}

.txt_field input:focus~label,
.txt_field input:valid~label {
    top: -5px;
    color: #fff;
}

.txt_field input:focus~span::before,
.txt_field input:valid~span::before {
    width: 100%;
}

input[type="submit"] {
    width: 100%;
    height: 50px;
    border: 1px solid;
    background: #000;
    border-radius: 25px;
    font-size: 18px;
    color: #e9f4fb;
    font-weight: 700;
    cursor: pointer;
    outline: none;
    transition: .5s;
}

input[type="submit"]:hover {
    background-color: #fff;
    color: #000;
}

@media screen and (max-width: 768px) {
    nav {
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    main {
        padding: 0 30px;
        margin-top: -40px;
    }

    nav a {
        order: 1;
        width: 100%;
        text-align: center;
    }

    nav .ul1 {
        order: 2;
    }

    nav .ul2 {
        order: 3;
    }
}
</style>