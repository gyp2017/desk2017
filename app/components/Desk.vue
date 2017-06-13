<template lang="html">
  <section class="desk">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <desk-list v-bind:desks="desks.content"></desk-list>
        </div>
        <div class="col-md-5">
          <h1>Members</h1>
          <members v-bind:members="members.content"></members>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import DeskList from './desk/List.vue'
import Members from './desk/Members.vue'
import * as types from 'store/types'

export default {

  components: { DeskList, Members },

  computed: {
    ...mapState([
      'desks',
      'members'
    ])
  },

  created() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      if (!this.$store.state.desks.content.length) {
        this.$store.dispatch({
          type: types.FETCH_DESKS
        })
      }
      if (!this.$store.state.members.content.length) {
        this.$store.dispatch({
          type: types.FETCH_MEMBERS
        })
      }
    }
  }
}
</script>

<style lang="css">

</style>
