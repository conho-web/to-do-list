<template>
  <label :class="$style.task">
    <div :class="$style.inputWrapper">
      <CheckBox @click="$emit('change')" />
      <Name>{{ title }}</Name>
    </div>
    <DeleteButton @click="$emit('delete')" />
  </label>
</template>

<script>
import CheckBox from "../atoms/CheckBox.vue";
import Name from "../atoms/Name.vue";
import DeleteButton from "../atoms/DeleteButton.vue";

export default {
  components: {
    CheckBox,
    Name,
    DeleteButton,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" module>
.inputWrapper {
  display: flex;
  align-items: center;
  width: 100%;
}

.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1.25rem;
  background-color: $secondary-200;
  border-radius: 0.625rem;
  margin-bottom: 1.625rem;
  transition: all 0.3s ease;
  border: 2px solid $secondary-200;

  &:hover {
    background-color: $secondary-100;
    border: 2px solid $secondary-400;
    cursor: pointer;
  }
}
</style>
