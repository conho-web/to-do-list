<template>
  <section :class="$style.todo">
    <div :class="$style.wrapper">
      <Title />
      <TaskList />
      <Footer />
    </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(../assets/img/background.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  font-family: "Open Sans";
  font-size: 1.25rem;
}

.wrapper {
  width: 100%;
  max-width: 33.75rem;
  box-shadow: 0px 8px 35px 5px rgba($color: $secondary-600, $alpha: 0.5);
  border: 2px solid $secondary-300;
}
</style>
