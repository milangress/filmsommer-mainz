<template lang="pug">
.timetable
  .event(v-for="date in allDates")
    p {{date.name}}

</template>

<script>
export default {
  name: "TimetableBlock",
  props: {
    allDates: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style scoped>

</style>
