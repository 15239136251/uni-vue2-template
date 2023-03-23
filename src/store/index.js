import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        title: 'Hello'
    },
    mutations: {
        setTitle(state, value) {
            console.log("🚀 ~ file: index.js:12 ~ setTitle ~ value:", value)
            state.title = value
        }
    }
})

export default store