<template lang="pug">
.timetable
  .day(v-for="date in allDates")
    h2 {{getDate(date.date)}}
    .event(v-for="event in date.events")
      strong {{getTime(event.time)}} {{event.type}}
      p {{event.title}}

</template>

<script>
const { DateTime } = require("luxon");

export default {
  name: "TimetableBlock",
  props: {
    allDates: {
      type: Array,
      required: true,
    }
  },
  methods: {
    getTime(time) {
      return DateTime.fromISO(time).toFormat("HH:mm");
    },
    getDate(date) {
      const weekday = DateTime.fromISO(date).weekdayShort
        // .toFormat("dd.MM.yyyy");
      const day = DateTime.fromISO(date).toFormat("dd.MM")
      return `${weekday}, ${day}`
    }
  }
}
</script>

<style scoped>
.timetable {
  padding: 0.5rem;
  width: var(--width-outer);
  margin: 0 auto;
  background-color: var(--pink);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: auto;
  grid-gap: 2rem;
}
.event {
  min-height: 5em
}

</style>
