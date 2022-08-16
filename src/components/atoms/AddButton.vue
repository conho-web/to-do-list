<template>
  <div class="wrapper">
    <input
      type="text"
      :class="$style.field"
      v-model="nameTask"
      placeholder="Enter the task text"
    />
    <button :class="$style.add" @click="addTask">Add a new task</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      nameTask: "",
    };
  },
  methods: {
    ...mapMutations(["addNewTask"]),
    addTask() {
      this.addNewTask(this.nameTask);
      this.nameTask = "";
    },
  },
};
</script>

<style lang="scss" module>
.field {
  padding: 0.625rem 0 0.625rem 1.625rem;
  width: 100%;
  max-width: 28rem;
  font-size: 1.25rem;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23FFCA93FF' stroke-width='3' stroke-dasharray='16' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 0.625rem;
  border: none;
  background-color: $secondary-200;
  color: $secondary-700;
  border-radius: 0.625rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 1.625rem;
  outline: none;

  &::placeholder {
    color: $secondary-300;
  }
}

.add {
  padding: 0.625rem 0;
  width: 100%;
  font-size: 1.25rem;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23FFCA93FF' stroke-width='3' stroke-dasharray='16' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 0.625rem;
  border: none;
  background-color: $secondary-200;
  color: $secondary-400;
  border-radius: 0.625rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transition: all 0.2s ease;
    background-color: $secondary-300;
    color: $secondary-200;
  }
}
</style>
