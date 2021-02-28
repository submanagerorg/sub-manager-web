import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        dark: true,
        themes: {
          dark: {
            primary: '#1B56D0',
            secondary: '#111422',
            error: '#FF0505',
            background: '#161927', 
          },
        }
    }
}

export default new Vuetify(opts)