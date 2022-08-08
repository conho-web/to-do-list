<template>
  <div :class="$style.content">
    <Task title="Task 1" />
    <Task title="Task 2" />
    <Task title="Task 3" />
    <AddButton />
  </div>
</template>

<script>
import Task from "../molecules/Task.vue";
import AddButton from "../atoms/AddButton.vue";

export default {
  components: {
    Task,
    AddButton,
  },
};
</script>

<style lang="scss" module>
.content {
  background-color: #fff4e9;
  padding: 2rem;
}
</style>
