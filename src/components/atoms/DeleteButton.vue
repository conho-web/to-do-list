<template>
  <button :class="$style.delete"></button>
</template>

<script></script>

<style lang="scss" module>
.delete {
  position: relative;
  width: 1.688rem;
  height: 1.688rem;
  border: 1.5px solid #ffca93;
  background: transparent;
  border-radius: 5px;
  transition: all 0.2s ease;
  cursor: pointer;
}

.delete::after,
.delete::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0.875rem;
  height: 1.5px;
  border-radius: 5px;
  background-color: #ffca93;
}

.delete::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.delete::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.delete:hover {
  border: 1.5px solid #fc8f1a;
}

.delete:hover.delete::after,
.delete:hover.delete::before {
  transition: all 0.2s ease;
  background-color: #fc8f1a;
}
</style>
