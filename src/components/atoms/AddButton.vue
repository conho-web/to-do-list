<template>
  <button :class="$style.add">Add a new task</button>
</template>

<script></script>

<style lang="scss" module>
.add {
  padding: 0.625rem;
  width: 100%;
  font-size: 1.25rem;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23FFCA93FF' stroke-width='2' stroke-dasharray='16' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 0.625rem;
  border: none;
  background-color: #ffecd8;
  color: #ffca93;
  border-radius: 0.625rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.add:hover {
  transition: all 0.2s ease;
  background-color: #ffca93;
  color: #ffecd8;
}
</style>
