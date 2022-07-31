<template lang="pug">
.logos
  template(v-for="logo in logos")
    nuxt-img.logo(
      format="svg"
      width="500px"
      provider="static"
      :src="getImage(logo.id)"
    )
</template>

<script>
export default {
  name: 'LogoBlock',
  data() {
    return {
      logos: [],
    }
  },
  async fetch() {
    const dataDates = await fetch(
      process.env.baseUrl +
        'files?filter[folder][_eq]=dd889dad-a9de-4c9b-b8cd-f67ab74cb6d5'
    ).then((response) => response.json())
    this.logos = await dataDates.data
    // eslint-disable-next-line no-console
    console.log(this.logos)
  },
  methods: {
    getImage(fileId) {
      const url = new URL(`${process.env.baseUrl}assets/${fileId}`)
      return url.href
    },
  },
}
</script>

<style scoped>
.logos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: auto;
  grid-gap: 2rem;
}
</style>
