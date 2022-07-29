<template lang="pug">
.background(@click="setBar")
  .bar-left
  .wrapper--inner
    .bar(
      v-for="bar in bars"
      :style="{backgroundColor: bar.color, flexGrow: bar.width}"
      )
  .bar-right

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
  mounted() {
    // setInterval(() => {
    //   this.setBar()
    // }, 1000)
  },
  methods: {
    setBar() {
      this.bars = this.bars.map(x => {
        return {
          width: Math.random() + 1,
          color: x.color
        }
      })
    }
  }
}
</script>

<style scoped>
.background {
  inset: 0;
  z-index: -1;
  position: fixed;
  height: 100vh;
  display: flex;
}
.wrapper--inner {
  margin: 0 auto;
  width: var(--width-inner);
  display: flex;
  justify-content: center
}
.bar {
  min-width: 10px;
  transition: all ease-in-out 0.5s;
}
.bar-left {
  height: 100%;
  flex-grow: 1;
  background-color: var(--green);
}
.bar-right {
  height: 100%;
  flex-grow: 1;
  background-color: var(--yellow);
}

</style>
