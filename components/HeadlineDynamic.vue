<template lang="pug">
.headline-dynamic
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
  name: "HeadlineDynamic",
  data () {
    return {
      topRow: [],
      bottomRow: [],
    }
  },
  mounted() {
    this.reloadAllRows()
    window.addEventListener('resize', this.reloadAllRows);
  },
  unmounted() {
    window.removeEventListener('resize', this.reloadAllRows);
  },
  methods: {
    reloadAllRows() {
      this.setTopRow()
      this.setBottomRow()
    },
    setTopRow() {
      this.topRow = Array.from({ length: 15 }).map(x => Math.random() - 0.5)
    },
    setBottomRow() {
      this.bottomRow = Array.from({ length: 15 }).map(x => Math.random() - 0.5)
    },
  },
}
</script>

<style scoped>
.headline-dynamic {
  width: var(--width-outer);
  margin: 0 auto;
  background-color: var(--pink);
  margin-block: 4rem;
  line-height: 1.2;
  font-size: 2rem;
  /*display: inline-block;*/
  contain: layout;
}
.headline-dynamic h1 {
  padding: 0;
  margin-block-start: -0.4em;
  margin-block-end: -0.3em;
  margin-left: -0.1em;
  display: inline-block;
}

.top-row, .bottom-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 0;
  overflow: visible;
  z-index: -10;
}
.top-row--item, .bottom-row--item {
  width: 100px;
  height: 50px;
  background-color: var(--pink);
  z-index: -1;
  transition: transform ease-in-out 0.5s;
  /*outline: 1px red solid;*/
}

</style>
