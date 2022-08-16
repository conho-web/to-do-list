<template>
  <div :class="$style.wrapper">
    <h1 :class="$style.title">to do list</h1>
  </div>
</template>

<style lang="scss" module>
.wrapper {
  background-color: $secondary-300;
  text-align: center;
  padding: 0.625rem 0;
}

.title {
  color: $secondary-800;
  font-weight: 600;
}
</style>
