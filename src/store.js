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
        login(){
            const url = '/login'
            
            
        }
    },
    getters: {},
    mutations: {},
})