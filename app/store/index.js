import Vue from 'vue'
import Vuex from 'vuex'

import desks from './modules/desks'
import members from './modules/members'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    desks,
    members
  }
})

export default store
