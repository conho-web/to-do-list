<template>
  <div :class="$style.content">
    <p :class="$style.message" v-if="!getFilteredTasks.length">
      You have not tasks!
    </p>
    <Task
      v-else
      v-for="(task, key) in getFilteredTasks"
      :key="key"
      :id="task.id"
      :title="task.title"
      :isChecked="task.isChecked"
      @change="() => changeTaskStatus(task.id)"
      @delete="() => deleteTask(task.id)"
    />
    <AddButton />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Task from "../molecules/Task.vue";
import AddButton from "../atoms/AddButton.vue";

export default {
  computed: {
    ...mapGetters(["getFilteredTasks"]),
  },
  methods: {
    ...mapMutations(["deleteTask", "changeTaskStatus"]),
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

.message {
  text-align: center;
  margin: 0 0 2rem 0;
  color: $secondary-700;
}
</style>
