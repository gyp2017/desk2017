import _ from 'underscore'
import API from 'api'
import * as types from 'store/types'

const state = {
  content: [
    /*
    {
      "name": "Group1",
      "desk": [
        [
          { "key": "G1-1" }, 
          { "key": "G1-2" },
          { "key": "G1-3" },
          { "key": "G1-4" }
        ],
        [
          { "key": "G1-5" },
          { "key": "G1-6" },
          { "key": "G1-7" },
          { "key": "G1-8" }
        ]
      ]
    },
    */
  ]
}

const getters = {}

const actions = {
  [types.FETCH_DESKS] (context) {
    API.getDesks()
      .then(desks => {
        context.commit(types.RECEIVE_DESKS, { desks })
      })
  }
}

const mutations = {
  [types.RECEIVE_DESKS] (state, { desks }) {
    state.content = desks.content
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
