<template>
  <div id="app">
    <ToDo />
  </div>
</template>

<script>
import ToDo from "./components/ToDo.vue";

export default {
  components: {
    ToDo,
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(./assets/img/background.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  font-family: "Open Sans";
  font-size: 1.25rem;
}

@media screen and (max-width: 630px) {
  html {
    font-size: 10px !important;
  }
}

@media screen and (max-width: 350px) {
  html {
    font-size: 9px !important;
  }
}
</style>
