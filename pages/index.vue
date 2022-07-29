<template lang="pug">
  div
    background-dynamic
    nuxt-img.logo(
      src="/FilmsommerLogo.svg"
    )
    //headline-dynamic-old
    headline-dynamic
      h1 Es geht weiter und wir legen wieder los!
    timetable-block(:allDates="dates")

    .content.inner(v-html="about.about" )

    //nuxt-img(src="/directus/assets/caf65d7b-0788-42c8-8bfd-77c48535f572" provider="static")
    div(v-for="date in dates")
      headline-dynamic
        h1 {{date.date}}
          br
          | {{date.name}}
      .event(v-for="event in date.events")
        strong {{event.time}} {{event.type}}
        p {{event.title}}
      nuxt-img(
      provider="static"
      :src="getImage(date.image)"
      )
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      baseUrl: 'https://rypqx7qi.directus.app/',
      dates: [],
      about: []
    }
  },
  async fetch() {
    const dataDates = await fetch(this.baseUrl + 'items/Dates').then((response) => response.json())
    this.dates = await dataDates.data
    // eslint-disable-next-line no-console
    console.log(this.dates)

    const dataAbout = await fetch(this.baseUrl + 'items/about').then((response) => response.json())
    this.about = await dataAbout.data
    // eslint-disable-next-line no-console
    console.log(this.about)
  },
  methods: {
    getImage (fileId) {
      const url = new URL(`${this.baseUrl}assets/${fileId}`)
      return url.href
    }
  },
}
</script>
<style>
:root {
  --width-outer: 90vw;
  --width-inner: calc(var(--width-outer) - 20rem);
  --pink: #F9D1E4;
  --green: #37AD60;
  --yellow: #E4DF00;
}
.logo {
  width: var(--width-outer);
  margin: 0 auto;
  display: block;
}
.inner {
  width: var(--width-inner);
  margin: 0 auto;
}
.outer {
  width: var(--width-outer);
  margin: 0 auto;
}
.content {
  background-color: var(--pink);
  margin-block: 3rem;
  padding: 0.5rem;
  font-size: 1.2rem;
}
</style>
