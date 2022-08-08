<template>
  <p :class="$style.name">
    <slot />
  </p>
</template>

<script></script>

<style lang="scss" module>
.name {
  color: #7f4b13;
  margin-left: 1.25rem;
}
</style>
