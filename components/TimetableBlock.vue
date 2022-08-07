<template lang="pug">
.timetable
  .day(
    v-for="date in allDates"
    @click="goToDate(date.date)"
    :class="{'isToday': isDateToday(date.date), 'isPast': isDatePast(date.date)}"
    )
    h2 {{getDate(date.date)}} {{date.date}}
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
    isDateToday(date) {
      const today = DateTime.local()
      // const today = DateTime.fromISO('2022-08-18') // test date
      return DateTime.fromISO(date).toISODate() === today.toISODate()
    },
    isDatePast(date) {
      const today = DateTime.local()
      // const today = DateTime.fromISO('2022-08-18') // test date
      const thisDate = DateTime.fromISO(date)
      const diff = today.diff(thisDate, 'days').toObject().days
      return diff > 0 && diff < 20
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

h2 {
  padding-block-end: 1rem;
}

.day {
  cursor: pointer;
  background-color: var(--pink);
  /*color: var(--white);*/
  /*font-size: 1.5rem;*/
  /*font-weight: bold;*/
  padding: 0.5rem;
  /*text-align: center;*/
  transition: transform 0.15s ease-in-out;
  position: relative;
}
.day:after,
.day:before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background-color: transparent;
  border: 1px solid var(--green);
  transition: transform 0.15s ease-in-out;
}
.isToday {
  border: 1px solid var(--green);
}
.isPast {
  opacity: 0.5;
}
.isPast:before,
.isPast:after {
  border: none;
}
.day:hover {
  background-color: var(--green);
  color: var(--pink);
  z-index: 100;
  border: 1px solid var(--pink);
  transform: scale(1.1) translate(-10px, -10px);
}
.day:hover:after {
  transform: translate(5px, 5px);
}
.day:hover:before {
  transform: translate(10px, 10px);
}
.event {
  min-height: 5em;
}
</style>
