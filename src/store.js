import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        auth: {
            token: null,
            user: null
        },
    },
    actions: {
        async login(context, data){
            try{
                const baseUrl = process.env.VUE_APP_API_URL
                const url = '/api/login'
                let response = await axios.post('http://'+baseUrl + url, data)
                const user = response.data.data
                if(response.data.status === 200){
                    context.commit('setUser', user)
                }
                return response.data
            } catch (error) {
                console.error(error)
            }
            
        }
    },
    getters: {
        getUser(state) {
            return state.auth.user
        }
    },
    mutations: {
        setUser(state, user) {
            localStorage.setItem('User', JSON.stringify(user))
            localStorage.setItem('token', user.token)
            state.auth.user = user
            state.auth.token = user.token
        },
        initialiseStore(state) {
            state.auth.token = JSON.parse(localStorage.getItem('token')) ? JSON.parse(localStorage.getItem('token')):null
            state.auth.user = JSON.parse(localStorage.getItem('User'))
        }
    },
})