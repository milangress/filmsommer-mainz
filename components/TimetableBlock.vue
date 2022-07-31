<template lang="pug">
.timetable
  .day(
    v-for="date in allDates"
    @click="goToDate(date.date)"
    )
    h2 {{getDate(date.date)}}
    .event(v-for="event in date.events")
      strong {{getTime(event.time)}} {{event.type}}
      p {{event.title}}

</template>

<script>
const { DateTime } = require('luxon')

export default {
  name: 'TimetableBlock',
  props: {
    allDates: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getTime(time) {
      return DateTime.fromISO(time).toFormat('HH:mm')
    },
    getDate(date) {
      const weekday = DateTime.fromISO(date).weekdayShort
      // .toFormat("dd.MM.yyyy");
      const day = DateTime.fromISO(date).toFormat('dd.MM')
      return `${weekday}, ${day}`
    },
    goToDate(date) {
      this.$router.push({
        path: '/',
        hash: '#date-' + date,
      })
    },
  },
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
@media (max-width: 1100px) {
  .timetable {
    grid-template-columns: 1fr 1fr;
  }
}
.day {
  cursor: pointer;
  background-color: var(--pink);
  /*color: var(--white);*/
  /*font-size: 1.5rem;*/
  /*font-weight: bold;*/
  /*padding: 0.5rem;*/
  /*text-align: center;*/
  border-radius: 0.5rem;
  transition: all 0.15s ease-in-out;
}
.day:hover {
  background-color: var(--green);
  color: var(--pink);
  box-shadow: 0 0 0.5rem 0.5rem var(--green);
  z-index: 100;
  transform: scale(1.2);
}
.event {
  min-height: 5em;
}
</style>
