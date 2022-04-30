import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

// pages
import Home from '../views/Home.vue'
import PostFilm from '../views/Film/PostFilm.vue'
import ListFilm from '../views/Film/ListFilm.vue'
import DetailFilm from '../views/Film/DetailFilm.vue'

// auth
import Login from '../views/Auth/Login.vue'
import SignUp from '../views/Auth/SignUp.vue'

// layouts
import Header from '../views/Layouts/Header.vue'
import MovieHeader from '../views/Layouts/MovieHeader.vue'

const routes = [
  {
    path: '/detail-film/:movie_id',
    name: 'Detail Film',
    components: {default: DetailFilm, header: MovieHeader},
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/post-film',
    name: 'Post Film',
    components: {default: PostFilm, header: MovieHeader},
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/list-film',
    name: 'List Film',
    components: {default: ListFilm, header: Header},
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    components: {default: Home, header: Header},
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
      if (store.getters.isLoggedIn) {
          next()
          return
      }
      next('/login')
  } else {
      next()
  }
})


export default router
