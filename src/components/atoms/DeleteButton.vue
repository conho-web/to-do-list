<template>
  <button :class="$style.delete" @click="$emit('click')"></button>
</template>

<script></script>

<style lang="scss" module>
.delete {
  position: relative;
  width: 1.688rem;
  height: 1.688rem;
  border: 1.5px solid $secondary-300;
  background: transparent;
  border-radius: 5px;
  transition: all 0.2s ease;
  cursor: pointer;

  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.875rem;
    height: 1.5px;
    border-radius: 5px;
    background-color: $secondary-300;
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover {
    border: 1.5px solid $secondary;
  }

  &:hover::after,
  &:hover::before {
    transition: all 0.2s ease;
    background-color: $secondary;
  }
}
</style>
