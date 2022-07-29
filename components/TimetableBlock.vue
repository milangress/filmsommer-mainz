<template lang="pug">
.timetable
  .day(v-for="date in allDates")
    h2 {{date.date}}
    .event(v-for="event in date.events")
      p {{event.time}} {{event.type}}
      p {{event.title}}

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
.timetable {
  width: var(--width-outer);
  margin: 0 auto;
  background-color: var(--pink);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: auto;
}

</style>
