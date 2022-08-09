<template>
  <section :class="$style.todo">
    <Title />
    <TaskList />
    <Footer />
  </section>
</template>

<script>
import Title from "./organisms/Title.vue";
import TaskList from "./organisms/TaskList.vue";
import Footer from "./organisms/Footer.vue";

export default {
  components: {
    Title,
    TaskList,
    Footer,
  },
};
</script>

<style lang="scss" module>
.todo {
  width: 100%;
  max-width: 33.75rem;
  box-shadow: 0px 8px 35px 5px rgba($color: $secondary-600, $alpha: 0.5);
  border: 2px solid $secondary-300;
}
</style>
