import { createStore } from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

export default createStore({
	plugins: [createPersistedState()],
	state: {
		status: '',
		token: localStorage.getItem('Authorization') || '',
		user: {},
		hasCheckoutItem: false,
	},
	mutations: {
		auth_request(state) {
			state.status = 'loading'
		},
		auth_success(state, token) {
			state.status = 'success'
			state.token = token
		},
		userDetail(state, user) {
			state.user = user
		},
		auth_error(state) {
			state.status = 'error'
		},
		logout(state) {
			state.status = ''
			state.token = ''
			state.user = []
		},
	},
	actions: {
		login({ commit }, user) {
			return new Promise((resolve, reject) => {
				commit('auth_request')
				axios.post('login', user).then(response => {
          const token = response.data.token
          const user = response.data.user
          console.log(user);
          commit('userDetail', user)
          localStorage.setItem('Authorization', token)
          axios.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization')
          commit('auth_success', token)
					resolve(response)
				})
				.catch(err => {
					commit('auth_error')
					localStorage.removeItem('Authorization')
					reject(err)
				})
			})
		},
		getProfile({ commit }) {
			return new Promise((resolve, reject) => {
				axios.get('user').then(response => {
          const userData = response.data.user
          commit('userDetail', userData)
					resolve(response)
				})
				.catch(err => {
					reject(err.response)
				})
			})
		},
		logout({ commit }) {
			return new Promise((resolve, reject) => {
				commit('logout')
				localStorage.removeItem('Authorization')
				delete axios.defaults.headers.common['Authorization']
				console.log('logged out');
				resolve()
			})
		},
	},
	getters: {
		isLoggedIn: state => !!state.token,
		authStatus: state => state.status,
		userDetail: state => state.user,
	}
})