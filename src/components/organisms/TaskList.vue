<template>
  <div :class="$style.content">
    <Task
      v-for="task in tasks"
      :key="task.id"
      :title="task.title"
      :isChecked="task.isChecked"
    />
    <AddButton />
  </div>
</template>

<script>
import Task from "../molecules/Task.vue";
import AddButton from "../atoms/AddButton.vue";

export default {
  data() {
    return {
      tasks: [
        {
          id: "1",
          title: "Task 1",
          isChecked: false,
        },
        {
          id: "2",
          title: "Task 2",
          isChecked: true,
        },
        {
          id: "3",
          title: "Task 3",
          isChecked: false,
        },
      ],
    };
  },

  components: {
    Task,
    AddButton,
  },
};
</script>

<style lang="scss" module>
.content {
  background-color: $secondary-100;
  padding: 2rem;
}
</style>
