<template>
  <button :class="[$style.showButton, $style.showAll]">
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="scss" module>
.showButton {
  background: transparent;
  border: none;
  margin-right: 1.625rem;
  font-size: 1.25rem;
  color: #7f4b136b;
  cursor: pointer;
  border-radius: 0.625rem;
  padding: 3px 0.625rem;
}

.showButton:last-child {
  margin-right: 0px;
}
</style>
