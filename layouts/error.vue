<template>
  <div>
    <headline-dynamic>
      <h1 v-if="error.statusCode === 404">Seite nicht gefunden</h1>
      <h1 v-else>An error occurred</h1>
    </headline-dynamic>
    <p class="center">
      <NuxtLink to="/" class="button">Zurück zur Startseite</NuxtLink>
    </p>
  </div>
</template>

<script>
export default {
  layout: 'default',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'] // you can set a custom layout for the error page
}
</script>

<style scoped>
.center {
  text-align: center;
}
.button {
  bottom: 1rem;
  right: 1rem;
  z-index: 100;
  background-color: #fff;
  border-radius: 1em;
  padding: 0.5rem;
  font-size: 0.8rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.button:hover {
  transform: scale(1.1);
  background-color: var(--green);
  color: white;
}

</style>
