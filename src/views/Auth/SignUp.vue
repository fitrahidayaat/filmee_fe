<template>
    <div class="center">
        <h1>Signup</h1>
        <form @submit.prevent="signUp">
            <div class="txt_field">
                <input type="text" required v-model="username">
                <span></span>
                <label>Username</label>
            </div>
            <div class="txt_field">
                <input type="password" required v-model="password">
                <span></span>
                <label>Password</label>
            </div>
            <input type="submit" value="Signup">
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        signUp() {
            var body = {
                username: this.username,
                password: this.password
            }
            this.axios.post('signup', body).then(response => {
                console.log(response.data);
                
            }).catch(error => {
                console.log(error.response);
            })
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&family=Poppins:wght@400;500;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

body {
    margin: 0;
    padding: 0;
    background: #000;
    height: 100vh;
    overflow: hidden;
}

.center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    background: white;
    border-radius: 10px;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);
}

.center h1 {
    color: black;
    text-align: center;
    padding: 20px 0;
    border-bottom: 1px solid silver;
}

.center form {
    padding: 0 40px;
    box-sizing: border-box;
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
    background: none;
    outline: none;
}

.txt_field label {
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
    background: #000;
    transition: .5s;
}

.txt_field input:focus~label,
.txt_field input:valid~label {
    top: -5px;
    color: #000;
}

.txt_field input:focus~span::before,
.txt_field input:valid~span::before {
    width: 100%;
}

.pass {
    margin: -5px 0 20px 5px;
    color: #a6a6a6;
    cursor: pointer;
}

.pass:hover {
    text-decoration: underline;
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
    margin-bottom: 30px;
}

input[type="submit"]:hover {
    border-color: #000;
    transition: .5s;
}

@media screen and (max-width: 480px) {
    .center {
        width: 350px;
    }
}
</style>