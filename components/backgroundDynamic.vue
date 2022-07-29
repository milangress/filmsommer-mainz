<template lang="pug">
.wrapper
  .bar(
    v-for="bar in bars"
    :style="{backgroundColor: bar.color, flexGrow: bar.width * 100}"
    )

</template>

<script>
export default {
  name: "BackgroundDynamic",
  data () {
    return {
      bars: [
        {
          color: '#F9D1E4',
          width: '1',
        },
        {
          color: '#E4DF00',
          width: '2',
        },
        {
          color: '#37AD60',
          width: '1',
        },
        {
          color: '#F9D1E4',
          width: '1',
        }
      ],
    }
  },
}
</script>

<style scoped>
.wrapper {
  margin: 0 auto;
  inset: 0;
  z-index: -1;
  position: fixed;
  height: 100vh;
  width: var(--width-inner);
  display: flex;
  justify-content: center
}
.bar {
  min-width: 10px;
}

</style>
