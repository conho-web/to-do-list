<template>
  <p :class="$style.counter">
    {{ getActiveTasks.length }}/{{ getTasks.length }} left
  </p>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getTasks", "getActiveTasks"]),
  },
};
</script>

<style lang="scss" module>
.counter {
  color: $secondary-700;
}
</style>
