<template lang="pug">
.headline-dynamic(@mouseover="reloadAllRows" ref="headline")
  .top-row
    .top-row--item(
      v-for="item in topRow"
      :style="{transform: `translate(${Math.random() * 50}%, ${item * 50}%)`}"
      )
  .top-row
    .top-row--item(
      v-for="item in topRow"
      :style="{transform: `translate(${Math.random() * 50}%, ${item * 50}%)`}"
    )
  .left-row
    .left-row--item(
      v-for="item in leftRow"
      :style="{transform: `translate(${item * 50}%, ${Math.random() * 50}%)`}"
    )
  .left-row
    .left-row--item(
      v-for="item in leftRow"
      :style="{transform: `translate(${item * 50}%, ${Math.random() * 50}%)`}"
    )
  slot
  .bottom-row
    .bottom-row--item(
      v-for="item in bottomRow"
      :style="{transform: `translate(${- Math.random() * 50}%, ${item * 50}%)`}"
    )
  .bottom-row
    .bottom-row--item(
      v-for="item in bottomRow"
      :style="{transform: `translate(${- Math.random() * 50}%, ${item * 50}%)`}"
    )
</template>

<script>
export default {
  name: 'HeadlineDynamic',
  data() {
    return {
      topRow: [],
      bottomRow: [],
      leftRow: [],
      amountOfElems: {
        top: 0,
        bottom: 0,
        left: 0,
      },
    }
  },
  mounted() {
    this.reloadAllRows()
    window.addEventListener('resize', this.reloadAllRows)
  },
  unmounted() {
    window.removeEventListener('resize', this.reloadAllRows)
  },
  methods: {
    reloadAllRows() {
      const { width, height } = this.$refs.headline.getBoundingClientRect()
      this.amountOfElems = {
        top: Math.ceil(width / 100),
        bottom: Math.ceil(width / 100),
        left: Math.ceil(height / 100),
      }
      this.setTopRow()
      this.setBottomRow()
      this.setLeftRow()
    },
    setTopRow() {
      this.topRow = Array.from({ length: this.amountOfElems.top }).map(
        (x) => Math.random() - 0.5
      )
    },
    setBottomRow() {
      this.bottomRow = Array.from({ length: this.amountOfElems.bottom }).map(
        (x) => Math.random() - 0.5
      )
    },
    setLeftRow() {
      this.leftRow = Array.from({ length: this.amountOfElems.left }).map(
        (x) => Math.random() - 0.5
      )
    },
  },
}
</script>

<style scoped>
.headline-dynamic {
  width: var(--width-outer);
  margin: 0 auto;
  background-color: var(--pink);
  margin-block: 6rem;
  line-height: 1.2;
  /*display: inline-block;*/
  contain: layout;
}
.headline-dynamic h1 {
  padding: 0;
  margin-block-start: -0.4em;
  margin-block-end: -0.3em;
  margin-left: -0.1em;
  display: inline-block;
  font-size: 3.3rem;
}

.top-row,
.bottom-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 0;
  overflow: visible;
  z-index: -10;
}
.top-row--item,
.bottom-row--item {
  width: 200px;
  aspect-ratio: 16/9;
  background-color: var(--pink);
  z-index: -1;
  transition: transform ease-in-out 0.5s;
  /*outline: 1px red solid;*/
}
.left-row {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 0;
  height: 100%;
  overflow: visible;
  z-index: -10;
  position: absolute;
  left: 100px;
}
.left-row--item {
  height: 100px;
  aspect-ratio: 16/9;
  background-color: var(--pink);
  z-index: -1;
  /*outline: 1px red solid;*/
  transition: transform ease-in-out 0.5s;
}
</style>
