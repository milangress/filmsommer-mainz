<template lang="pug">
  div
    p test
    div(v-for="date in dates") {{date.name}}
      img(
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
