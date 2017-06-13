<template lang="html">
  <table class="table table-sm">
    <thead>
      <tr>
        <th>Name</th>
        <th>Nick</th>
        <th>Team</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="member in members" :key="member.desk">
        <td>{{ member.name }}</td>
        <td>{{ member.nick }}</td>
        <td>{{ member.team }}</td>
        <td>
          <button type="button" class="btn btn-outline-warning btn-sm"
              v-on:click="selectMember(member.desk)">
            Select
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['members'],
  methods: {
    selectMember(desk) {
      this.$emit('selectMember', desk)
    }
  }
}
</script>

<style lang="css">

</style>
