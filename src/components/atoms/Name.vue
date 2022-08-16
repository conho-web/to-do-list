<template>
  <p :class="$style.name">
    <slot />
  </p>
</template>

<style lang="scss" module>
.name {
  color: $secondary-700;
  margin-left: 1.25rem;
}
</style>
