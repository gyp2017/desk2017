import axios from 'axios'

export default {

  getDesks() {
    return axios.get('/api/desks.json')
                .then(response => response.data)
                .catch(error => error)
  },

  getMembers() {
    return axios.get('/api/members.json')
                .then(response => response.data)
                .catch(error => error)
  }
}
