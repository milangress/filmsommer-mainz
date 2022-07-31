<template lang="pug">
  div
    headline-dynamic
      h1 Impressum
    .content.inner(v-html="impressum.impressum")

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Impressum',
  data() {
    return {
      impressum: {},
    }
  },
  async fetch() {
    const dataDates = await fetch(process.env.baseUrl + 'items/impressum').then(
      (response) => response.json()
    )
    this.impressum = await dataDates.data
    // eslint-disable-next-line no-console
    console.log(this.impressum)
  },
}
</script>

<style scoped></style>
