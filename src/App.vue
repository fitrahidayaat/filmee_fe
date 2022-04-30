<template>
  <router-view name="header"></router-view>
  <router-view/>
</template>

<style>
*{
    margin: 0;
    padding: 0;
}
body{
    background-color: black;
    font-family: 'Fredoka One', cursive;
    color: #fff;
    background-color: #000;
}
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
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
.logo{
    font-size: 60px;
}
.title{
    font-size: 72px;
}
main{
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: space-around;
    font-family: 'Montserrat';
    padding: 20px 100px;
}
.btn{
    display: inline-block;
    text-decoration: none;
    border: 1px solid #fff;
    background: none;
    padding: 10px 20px;
    font-size: 30px;
    font-family: "montserrat";
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
@media screen and (max-width: 768px) {
    nav{
        /* flex-direction: column; */
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20px 20px;
    }
    nav span{
        width: 100%;
        text-align: center;
    }
    main{
        padding: 20px 40px;
        flex-direction: column;
        /* font-size: 10px; */
        justify-content: center;
        align-items: center;
    }
    main div{
        text-align: center;
    }
    .title{
        text-align: center;
        font-size: 36px;
    }
    img{
        order: -1;
        width: 300px;
    }
}
@media screen and (max-width: 1400px) {
    main img{
        width: 450px;
    }
    .title{
        font-size: 56px;
    }
    .btn{
        font-size: 30px;
    }
}
@media screen and (max-width: 1128px) {
    main img{
        width: 300px;
    }
    .title{
        font-size: 36px;
    }
    .btn{
        font-size: 24px;
    }
}
</style>
