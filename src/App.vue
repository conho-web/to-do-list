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
@media screen and (max-width: 630px) {
  html {
    font-size: 10px !important;
  }
}
</style>
