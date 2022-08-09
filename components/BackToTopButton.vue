<template lang="pug">
  Transition(name="slideTop")
    a.backToTopButton(
      v-if="isVisible"
      @click="scrollToTop"
      )
        span ↑ Programmübersicht
</template>

<script>
export default {
  name: "BackToTopButton",
  data() {
    return {
      isVisible: false,
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isVisible = window.scrollY > 1500;
    },
    scrollToTop(date) {
      this.$router.push({
        path: '/',
        hash: '#timetable',
      })
    },
  },
};
</script>

<style scoped>
.backToTopButton {
  position: fixed;
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
.backToTopButton:hover {
  transform: scale(1.1);
  background-color: var(--green);
  color: white;
  }
/*.backToTopButton:after {*/
/*  content: '';*/
/*  position: absolute;*/
/*  border-radius: 50%;*/
/*  inset: 0;*/
/*  z-index: -10;*/
/*  background-color: transparent;*/
/*  border: 1px solid var(--green);*/
/*  transition: transform 0.15s ease-in-out;*/
/*  transform: translate(5px, 5px);*/
/*}*/
/* we will explain what these classes do next! */

.slideTop-enter-active,
.slideTop-leave-active {
  transition: all 0.6s ease-in-out;
}

.slideTop-enter, .slideTop-leave-to {
  transform: translateY(50px);
}
</style>
