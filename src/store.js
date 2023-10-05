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
            const baseUrl = process.env.VUE_APP_API_URL
            const url = '/api/login'

            console.log("base_url", baseUrl)
            console.log("url", url)

            try{
                let response = await axios.post(baseUrl + url, data)
    
                const user = response.data.data

                console.log("response", response.data)

                if(response.data?.status === 200){
                    context.commit('setUser', user)
                    context.commit('initialiseStore')
                }
                return response.data
            } catch (error) {
                console.error(error)
            }
        },
        async getSubs(){
            const baseUrl = process.env.VUE_APP_API_URL
            const url = '/api/subscriptions'

            try{
                let response = await axios.get(baseUrl + url)
    
                return response.data.data.data
            } catch (error) {
                console.error(error)
            }
        },
        async logout() {
            this.state.auth.user = null
            this.state.auth.token = null
            localStorage.removeItem('User')
            localStorage.removeItem('token')
            localStorage.removeItem('tokenexp')
        }
    },
    getters: {
        getUser(state) {
            return state.auth.user
        }
    },
    mutations: {
        setUser(state, user) {
            localStorage.setItem('User', JSON.stringify(user.user))
            localStorage.setItem('token', user.user.token)
            localStorage.setItem('tokenexp', user.user.token_expiry)
            state.auth.user = user.user
            state.auth.token = user.user.token
        },
        initialiseStore(state) {
            let parseExp = new Date(localStorage.getItem('tokenexp'))

            if (parseExp > new Date()) {
                state.auth.token = localStorage.getItem('token')
                state.auth.user = JSON.parse(localStorage.getItem('User'))
                state.auth.tokenexp = localStorage.getItem('tokenexp')
            } else {
                state.auth.token = null
                state.auth.user = null
                state.auth.tokenexp = null
            }
            
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
            axios.defaults.headers.common['Accept'] = 'application/json'
        }
    },
})