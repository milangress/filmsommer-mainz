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
    headline-dynamic
      h1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
      dates: []
    }
  },
  async fetch() {
    const data = await fetch(this.baseUrl + 'items/Dates').then((response) => response.json())
    this.dates = await data.data
    // eslint-disable-next-line no-console
    console.log(this.dates)
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
  --width-inner: calc(var(--width-outer) - 10rem);
  --pink: #F9D1E4;
  --green: #37AD60;
  --yellow: #E4DF00;
}
.logo {
  width: var(--width-outer);
  margin: 0 auto;
  display: block;
}
</style>
