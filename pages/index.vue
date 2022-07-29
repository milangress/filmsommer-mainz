<template lang="pug">
  div
    p test
    nuxt-img(src="/directus/assets/caf65d7b-0788-42c8-8bfd-77c48535f572")
    div(v-for="date in dates") {{date.name}}
      nuxt-img(
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
