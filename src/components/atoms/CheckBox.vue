<template>
  <label :class="$style.inputContainer">
    <input type="checkbox" :checked="isChecked" />
    <span :class="$style.checkmark"></span>
  </label>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" module>
.inputContainer {
  display: block;
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.375rem;
  background: transparent;
  border: 1.5px solid $secondary-400;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  & span {
    position: absolute;
    top: -1px;
    left: -1px;
    border-radius: 4px;
    height: 1.625rem;
    width: 1.625rem;
    background-color: transparent;
    transition: all 0.2s ease;
  }

  &:hover input ~ span {
    background: $secondary-op-24;
    transition: all 0.2s ease;
  }

  & input:checked ~ span {
    background-color: $secondary-400;
  }

  & input:checked ~ span:after {
    display: block;
  }

  & span:after {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%) rotate(45deg);
    width: 0.313rem;
    height: 0.625rem;
    border: solid $white;
    border-width: 0 1px 1px 0;
  }
}

span:after {
  content: "";
  position: absolute;
  display: none;
}
</style>
