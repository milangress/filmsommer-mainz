<template>
  <div>
    <background-dynamic />
    <Nuxt />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Default',
}
</script>

<style>
:root {
  --width-outer: 90vw;
  --width-inner: calc(var(--width-outer) - 20rem);
  --pink: #f9d1e4;
  --green: #37ad60;
  --yellow: #e4df00;
}
@media (min-width: 1600px) {
  :root {
    --width-outer: 1500px;
    --width-inner: calc(var(--width-outer) - 20rem);
  }
}
@media (max-width: 1100px) {
  :root {
    --width-outer: 95vw;
    --width-inner: calc(var(--width-outer) - 5vw);
  }
  html {
    font-size: 0.8rem;
  }
}

body {
  background: var(--pink);
  scroll-padding-top: 2rem;
}

.logo {
  width: var(--width-outer);
  /*min-height: 100vh;*/
  margin: 2rem auto;
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
.content :where(h1, h2, h3, h4, h5) {
  padding-block-start: 1em;
  -webkit-text-fill-color: transparent;
  font-size: 1.5em;
}
</style>
