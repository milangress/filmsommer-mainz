<template lang="pug">
  div
    //nuxt-img.logo(
    //  src="/FilmsommerLogo.svg"
    //)
    BackToTopButton
    LogoDynamic.logo
    //headline-dynamic-old
    headline-dynamic
      h1 Es geht weiter und wir legen wieder los!
    timetable-block#timetable(:allDates="dates")

    .content.inner(v-html="about.about" )

    //PathText
    //nuxt-img(src="/directus/assets/caf65d7b-0788-42c8-8bfd-77c48535f572" provider="static")
    div(v-for="date in dates")
      figure.date-image
        nuxt-img(
          format="webp"
          sizes="sm:100vw md:50vw lg:1900px"
          provider="static"
          quality="70"
          loading="lazy"
          :src="getImage(date.image)"
          :alt="`An Image from the ${date.events[1].title} event`"
        )
        figcaption {{date.events[1].title}}

      headline-dynamic.headline(:id="'date-'+ date.date")
        h1
          span.date {{getDate(date.date)}}
          br
          span.name {{date.name}}
      .content.inner
        .event-box-wrapper
          .event-short(v-for="event in date.events")
            strong {{getTime(event.time)}} {{event.type}}
            p {{event.title}}
        .events-text-wrapper
          .event(v-for="event in date.events")
            path-text(:text="event.pathtext" v-if="event.pathtext" )
            h3 {{event.title_long ? event.title_long : event.title}}
            p(v-html="event.content" )
      //nuxt-img(
      //provider="static"
      //:src="getImage(date.image)"
      //)
    headline-dynamic
      h1 Unsere Partner
    .content.inner
      logo-block
    .content.inner
      nuxt-link(
        to="/impressum"
        ) Impressum
</template>

<script>
import { DateTime } from 'luxon'

export default {
  name: 'IndexPage',
  data() {
    return {
      dates: [],
      about: [],
    }
  },
  async fetch() {
    const dataDates = await fetch(process.env.baseUrl + 'items/Dates').then(
      (response) => response.json()
    )
    this.dates = await dataDates.data
    // eslint-disable-next-line no-console
    console.log(this.dates)

    const dataAbout = await fetch(process.env.baseUrl + 'items/about').then(
      (response) => response.json()
    )
    this.about = await dataAbout.data
    // eslint-disable-next-line no-console
    console.log(this.about)
  },
  methods: {
    getImage(fileId) {
      const url = new URL(`${process.env.baseUrl}assets/${fileId}`)
      return url.href
    },
    getTime(time) {
      return DateTime.fromISO(time).toFormat('HH:mm')
    },
    getDate(date) {
      const weekday = DateTime.fromISO(date).weekdayShort
      // .toFormat("dd.MM.yyyy");
      const day = DateTime.fromISO(date).toFormat('dd.MM')
      return `${weekday}, ${day}`
    },
  },
}
</script>
<style>
.date-image {
  width: var(--width-inner);
  /*max-height: 60vh;*/
  margin: 2rem auto 0 auto;
  transform: translateX(25%);
}
@media (max-width: 1100px) {
  .date-image {
    transform: translateX(0%);
  }
}
.headline .date {
  font-size: 0.8em;
}
.event-box-wrapper {
  /*border: 1px solid black;*/
  width: fit-content;
  padding: 2rem;
  margin: 2rem;
  /*background-color: var(--green);*/
  /*box-shadow: 5px 5px 0px 0px black;*/
  background-color: var(--green);
  color: var(--pink);
  /*box-shadow: 0 0 0.5rem 0.5rem var(--green);*/
  position: relative;
  contain: layout;
}
.event-box-wrapper:after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background-color: transparent;
  transform: translate(5px, 5px);
  border: 1px solid var(--green);
}
.event-box-wrapper:before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background-color: transparent;
  transform: translate(10px, 10px);
  border: 1px solid var(--green);
}
.events-text-wrapper {
}
</style>
