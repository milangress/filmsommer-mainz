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
    footer.content.inner
      a.instagram.social-media-link(
        href="https://www.instagram.com/filmsommerfestivalmainz/"
        target="_blank"
        title="Filmsommerfestival Mainz auf Instagram")
        svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512")
          path(d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z")
      a.facebook.social-media-link(
        href="https://www.facebook.com/filmsommer"
        target="_blank"
        title="Filmsommerfestival Mainz auf Facebook")
        svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512")
          path(d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z")
      nuxt-link(
        to="/impressum"
        title="Impressum Filmsommerfestival Mainz"
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
footer.content {
  padding: 4rem 0;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: baseline;
}
footer.content > * {
  margin-left: 1rem;
}
.social-media-link {
  height: 1em;
  width: 1em;
}
</style>
