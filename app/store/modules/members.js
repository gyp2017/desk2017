import _ from 'underscore'
import API from 'api'
import * as types from 'store/types'

const state = {
  content: [
    /*
    {
      "name": "홍길동",
      "desk": "G1-1",
      "nick": "홍",
      "team": "team1"
    },
    */
  ]
}

const getters = {}

const actions = {
  [types.FETCH_MEMBERS] (context) {
    API.getMembers()
      .then(members => {
        context.commit(types.RECEIVE_MEMBERS, { members })
      })
  }
}

const mutations = {
  [types.RECEIVE_MEMBERS] (state, { members }) {
    state.content = members.content
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
