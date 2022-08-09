<template>
  <button :class="[$style.showButton, { [$style.active]: isActive }]">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" module>
.showButton {
  background: transparent;
  border: none;
  margin-right: 1.625rem;
  font-size: 1.25rem;
  color: $secondary-700;
  cursor: pointer;
  border-radius: 0.625rem;
  padding: 3px 0.625rem;

  &:last-child {
    margin-right: 0px;
  }

  &.active {
    border: 1px solid $secondary-700;
  }
}
</style>
