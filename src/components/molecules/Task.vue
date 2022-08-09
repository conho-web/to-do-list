<template>
  <div :class="$style.task">
    <div :class="$style.inputWrapper">
      <CheckBox :isChecked="isChecked" />
      <Name>{{ title }}</Name>
    </div>
    <DeleteButton />
  </div>
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
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" module>
.inputWrapper {
  display: flex;
  align-items: center;
}

.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1.25rem;
  background-color: $secondary-200;
  border-radius: 0.625rem;
  margin-bottom: 1.625rem;
}
</style>
